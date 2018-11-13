import { verify } from "jwt-then"

export const getUser = async ({ req: { headers } }, { users }) => {
  const [jwtReqType, token] = headers.authorization.split(" ")
  if (jwtReqType === "Bearer") {
    const { id } = await verify(token, process.env.JWT_SECRET)
    const user = await users.findById(id)
    if (user) return user
  }
  return null
}
