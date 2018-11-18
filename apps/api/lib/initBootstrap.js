import express from "express"
import { ApolloServer } from "apollo-server-express"

import getContext from "./getContext"
import getSchema from "./getSchema"
import initMongo from "./initMongo"
import getModels from "../models"

export default async () => {
  const mongoUrl = `mongodb://${process.env.DB_USERNAME}:${
    process.env.DB_PASSWORD
  }@${process.env.DB_URL}`

  const mongo = await initMongo(mongoUrl)
  const models = getModels(mongo)

  const server = new ApolloServer({
    schema: getSchema(),
    context: async ({ req }) => getContext(req, models)
  })

  const app = express()
  server.applyMiddleware({ app })

  return { app, server }
}
