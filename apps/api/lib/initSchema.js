import { applyMiddleware } from "graphql-middleware"
import { makeExecutableSchema } from "graphql-tools"

import typeDefs from "../schemas"
import resolvers from "../resolvers"

export default () => {
  const schema = makeExecutableSchema({ typeDefs, resolvers })

  const middlewares = []

  return applyMiddleware(schema, ...middlewares)
}
