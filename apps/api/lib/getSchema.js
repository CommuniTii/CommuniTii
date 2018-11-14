import { makeExecutableSchema } from "graphql-tools"

import typeDefs from "../schemas"
import resolvers from "../resolvers"
import schemaDirectives from "../directives"

export default () =>
  makeExecutableSchema({
    typeDefs,
    resolvers,
    schemaDirectives
  })
