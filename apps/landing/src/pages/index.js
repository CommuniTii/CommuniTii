import React from "react"

import Layout from "../components/Layout"
import Hero from "../components/Hero"
import TopBar from "../components/TopBar"

const LandingPage = () => (
  <Layout>
    <header>
      <TopBar />
    </header>
    <main>
      <Hero />
    </main>
    <footer>Our footer</footer>
  </Layout>
)

export default LandingPage
