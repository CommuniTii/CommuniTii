import initBootstrap from "./lib/initBootstrap"

const initApp = async () => {
  const { app, server } = await initBootstrap()

  app.listen({ port: 4000 }, () =>
    console.log(
      `🚀  Server ready at http://localhost:4000${server.graphqlPath}`
    )
  )
}

try {
  initApp()
} catch (e) {
  console.error("🔥 ", e.message)
}
