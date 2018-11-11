import { AuthenticationError } from "apollo-server"

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
    signIn: (_, { userName, password }, context) => {
      const user = users.filter(user => user.userName === userName)
      if (user[0]) return "asdasdasdsad"
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
