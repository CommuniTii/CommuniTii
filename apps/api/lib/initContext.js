import initMongo from "./initMongo"

export default async req => {
  const mongoUrl = `mongodb://${process.env.DB_USERNAME}:${
    process.env.DB_PASSWORD
  }@${process.env.DB_URL}`

  const mongo = await initMongo(mongoUrl)

  return {
    ...mongo,
    req
  }
}
