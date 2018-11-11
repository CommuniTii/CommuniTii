import express from "express"
import { ApolloServer } from "apollo-server-express"

import initContext from "./lib/initContext"
import initSchema from "./lib/initSchema"

const initApp = async () => {
  const server = new ApolloServer({
    schema: initSchema(),
    context: async req => initContext(req)
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
