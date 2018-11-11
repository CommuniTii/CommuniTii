import express from "express"
import { ApolloServer } from "apollo-server-express"

import initMongo from "./lib/initMongo"
import typeDefs from "./schemas"
import resolvers from "./resolvers"

const initApp = async () => {
  const mongoUrl = `mongodb://${process.env.DB_USERNAME}:${
    process.env.DB_PASSWORD
  }@${process.env.DB_URL}`

  const mongo = await initMongo(mongoUrl)

  const context = {
    ...mongo
  }

  const server = new ApolloServer({ typeDefs, resolvers, context })

  const app = express()
  server.applyMiddleware({ app })

  app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  )
}

initApp()
