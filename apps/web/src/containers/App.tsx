import React from "react"
import { BrowserRouter as Router } from "react-router-dom"
import { Provider as ReduxProvider } from "react-redux"
import { compose } from "lodash/fp"

import bootstrapRoot from "../lib/bootstrapRoot"

import Pages from "../pages"

const App = () => (
  <Router>
    <Pages />
  </Router>
)

export default bootstrapRoot(App)
