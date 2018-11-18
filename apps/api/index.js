import initBootstrap from "./lib/initBootstrap"

initBootstrap()
  .then(({ app, server: { graphqlPath } }) =>
    app.listen({ port: process.env.PORT }, () =>
      console.log(`🚀  Server ready at http://localhost:4000${graphqlPath}`)
    )
  )
  .catch(e => console.error("🔥 ", e.message))
