import { AuthenticationError } from "apollo-server"
import { sign } from "jwt-then"
import { hash, compare } from "bcrypt"

const JWT_SECRET = process.env.JWT_SECRET

export default {
  Query: {},
  // TODO: Refactor common actions into User models
  // TODO: Refactor signin & signup mutation to return AuthTokens type which will contain tradiition similar to traditional JWT auth response
  Mutation: {
    signIn: async (_, { userName, password }, { collections }) => {
      const user = await collections.users.findOne({ userName })

      if (user) {
        const { _id: id, email, password: hashedPassword } = user
        const validPassword = await compare(password, hashedPassword)

        if (validPassword)
          return sign({ id, userName, email }, process.env.JWT_SECRET)
      }

      throw new AuthenticationError("Invalid Credentials")
    },
    signUp: async (_, args, { collections, db }) => {
      const { password, ...userInfo } = args
      const user = { ...userInfo, password: await bcrypt.hash(password, 10) }
      await collections.users.insertOne(user)
      const { _id: id, userName, email } = user
      const token = await sign({ id, userName, email }, JWT_SECRET)
      return token
    }
  },
  User: {
    id: ({ id }) => id,
    fName: ({ fName }) => fName,
    lName: ({ lName }) => lName,
    userName: ({ userName }) => userName,
    email: ({ email }) => email,
    isStudent: ({ isStudent }) => isStudent,
    schoolName: ({ schoolName }) => schoolName
  }
}
