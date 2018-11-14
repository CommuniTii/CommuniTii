import { verify } from "jwt-then"

const extractToken = ({ authorization }) =>
  !!authorization && authorization.startsWith("Bearer ")
    ? authorization.substring(7, authorization.length)
    : null

export const getUser = async ({ req: { headers } }, { users }) => {
  const token = extractToken(headers)
  if (token) {
    const { id } = await verify(token, process.env.JWT_SECRET)
    const user = await users.findById(id)
    if (user) return user
  }
  return null
}
