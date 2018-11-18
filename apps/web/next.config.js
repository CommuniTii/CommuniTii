const withPlugins = require("next-compose-plugins")
const nextEnv = require("next-env")
const dotenvLoad = require("dotenv-load")

dotenvLoad()

const plugins = [nextEnv()]

const config = {}

module.exports = withPlugins([...plugins], config)
