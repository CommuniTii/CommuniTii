import express from "express"
import { ApolloServer } from "apollo-server-express"

import getContext from "./lib/getContext"
import getSchema from "./lib/getSchema"

const initApp = async () => {
  const server = new ApolloServer({
    schema: getSchema(),
    context: async req => getContext(req)
  })

  const app = express()
  server.applyMiddleware({ app })

  app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  )
}

try {
  initApp()
} catch (e) {
  console.error(e.message, "🔥")
}
