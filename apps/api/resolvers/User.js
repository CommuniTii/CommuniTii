export default {
  Query: {},
  // TODO: Refactor common actions into User models
  // TODO: Refactor signin & signup mutation to return AuthTokens type which will contain tradiition similar to traditional JWT auth response
  Mutation: {
    signIn: async (_, args, { models: { users } }) => users.signIn(args),
    signUp: async (_, args, { models: { users } }) => users.signIn(args)
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
