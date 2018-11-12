import { AuthenticationError } from "apollo-server"
import { find } from "lodash"
import { sign } from "jwt-then"
import bcrypt from "bcrypt"

const users = [
  {
    id: "123fdf2",
    fName: "John",
    lName: "Lewis",
    userName: "jlow",
    email: "jlow@gmail.com",
    isStudent: true,
    schoolName: "Hunter College"
  }
]

const JWT_SECRET = process.env.JWT_SECRET

export default {
  Query: {},
  Mutation: {
    signIn: async (_, { userName, password }, context) => {
      const user = find(users, { userName })
      if (user) {
        const { id, email } = user
        const token = await sign({ id, userName, email }, JWT_SECRET)
        return token
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
