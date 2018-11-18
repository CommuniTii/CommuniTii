import { MongoConnector, MongoEntity } from "apollo-connector-mongodb"
import lruCache from "lru-cache"
import { ObjectId } from "mongodb"

const initCollections = async db => {
  const users = await new MongoEntity(db, "users", { cacheMap: lruCache })

  return {
    users
  }
}

export default async url => {
  // monkey patch to allow ObjectId to be used w/ graphql ID type
  ObjectId.prototype.valueOf = function() {
    return this.toString()
  }

  const db = new MongoConnector(url)
  await db.connect()

  const collections = await initCollections(db)

  return { db, collections }
}
