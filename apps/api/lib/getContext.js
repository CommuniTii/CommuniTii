import { getUser } from "../utils"

export default async (req, models) => {
  return {
    req,
    models,
    user: await getUser(req, models)
  }
}
