const graphqlLoaderRule = {
  test: /\.(graphql|gql)$/,
  exclude: /node_modules/,
  loader: "graphql-tag/loader"
}

module.exports = {
  webpack: (config, options, webpack) => {
    // Perform customizations to config
    // Important: return the modified config

    // changes the name of the entry point to index.js in the project root
    config.entry.main = ["./index.js"]
    // load .graphql files
    config.module.rules.push(graphqlLoaderRule)

    return config
  }
}
