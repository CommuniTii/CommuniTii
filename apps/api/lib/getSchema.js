import { makeExecutableSchema } from "graphql-tools"

import typeDefs from "../schemas"
import resolvers from "../resolvers"

export default () => makeExecutableSchema({ typeDefs, resolvers })
