const withPlugins = require("next-compose-plugins")
const nextEnv = require("next-env")
const dotenvLoad = require("dotenv-load")
const withTM = require("next-plugin-transpile-modules")

dotenvLoad()

const plugins = [withTM({ transpileModules: [] }), nextEnv()]

const config = {}

module.exports = withPlugins([...plugins], config)
