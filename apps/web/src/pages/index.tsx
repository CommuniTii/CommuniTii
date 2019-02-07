import React from "react"
import { Route, Switch } from "react-router"

import HomePage from "./home"
import NotFound from "./notFound"

const Pages = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="*" component={NotFound} />
  </Switch>
)

export default Pages
