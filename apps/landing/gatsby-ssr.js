const React = require("react")
const { renderToString } = require("react-dom/server")
const { JssProvider } = require("react-jss")
const getPageContext = require("./src/lib/getPageContext").default

function replaceRenderer({
  bodyComponent,
  replaceBodyHTMLString,
  setHeadComponents
}) {
  // Get the context of the page to collected side effects.
  const muiPageContext = getPageContext()

  const bodyHTML = renderToString(
    <JssProvider registry={muiPageContext.sheetsRegistry}>
      {bodyComponent}
    </JssProvider>
  )

  replaceBodyHTMLString(bodyHTML)
  setHeadComponents([
    <style
      type="text/css"
      id="jss-server-side"
      key="jss-server-side"
      dangerouslySetInnerHTML={{
        __html: muiPageContext.sheetsRegistry.toString()
      }}
    />
  ])
}

exports.replaceRenderer = replaceRenderer

const withRoot = require("./src/lib/withRoot").default
const WithRoot = withRoot(props => props.children)

const WrappedElement = ({ element }) => <WithRoot>{element}</WithRoot>

exports.wrapRootElement = WrappedElement
