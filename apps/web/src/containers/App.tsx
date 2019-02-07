import React from "react"
import { BrowserRouter as Router } from "react-router-dom"

import withMaterialRoot from "../lib/withMaterialRoot"

import Pages from "../pages"

const App = () => (
  <Router>
    <Pages />
  </Router>
)

export default withMaterialRoot(App)
