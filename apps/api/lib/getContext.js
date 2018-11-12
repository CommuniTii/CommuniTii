export default async (req, mongo) => {
  return {
    ...mongo,
    req
  }
}
