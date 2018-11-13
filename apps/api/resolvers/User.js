export default {
  Query: {
    me: (_, __, { user }) => {
      console.log(user)
      return user
    }
  },
  // TODO: Refactor signin & signup mutation to return AuthTokens type which will contain tradiition similar to traditional JWT auth response
  Mutation: {
    signIn: async (_, args, { models: { users } }) => users.signIn(args),
    signUp: async (_, args, { models: { users } }) => users.signIn(args)
  },
  User: {
    id: ({ _id: id }) => id,
    fName: ({ fName }) => fName,
    lName: ({ lName }) => lName,
    userName: ({ userName }) => userName,
    email: ({ email }) => email,
    isStudent: ({ isStudent }) => isStudent,
    schoolName: ({ schoolName }) => schoolName
  }
}
