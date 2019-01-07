import React from "react"
import withRoot from "./src/lib/withRoot"

const WithRoot = withRoot(props => props.children)

export const wrapRootElement = ({ element }) => {
  return <WithRoot key={Math.random()}>{element}</WithRoot>
}
