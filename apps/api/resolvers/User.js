import { AuthenticationError } from "apollo-server"
import { find } from "lodash"
import { sign } from "jwt-then"

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

export default {
  Query: {},
  Mutation: {
    signIn: async (_, { userName, password }, context) => {
      const user = find(users, { userName })
      if (user) {
        const { id, email } = user
        const token = await sign({ id, userName, email }, "234ejh23g4h324jhb")
        return token
      }
      throw new AuthenticationError("Invalid Credentials")
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
