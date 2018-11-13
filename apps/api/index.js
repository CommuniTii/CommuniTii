import express from "express"
import { ApolloServer } from "apollo-server-express"

import getContext from "./lib/getContext"
import getSchema from "./lib/getSchema"
import initMongo from "./lib/initMongo"
import getModels from "./models"

const initApp = async () => {
  const mongoUrl = `mongodb://${process.env.DB_USERNAME}:${
    process.env.DB_PASSWORD
  }@${process.env.DB_URL}`

  const mongo = await initMongo(mongoUrl)
  const models = getModels(mongo)
  const schema = getSchema()

  const server = new ApolloServer({
    schema,
    context: async req => getContext(req, models)
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
