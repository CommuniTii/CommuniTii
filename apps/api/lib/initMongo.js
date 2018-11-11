import { MongoConnector, MongoEntity } from "apollo-connector-mongodb"
import lruCache from "lru-cache"

const initCollections = async db => {
  const users = await new MongoEntity(db, "users", { cacheMap: lruCache })

  return {
    users
  }
}

export default async url => {
  const db = await new MongoConnector(url)

  const collections = await initCollections(db)

  return { db, collections }
}
