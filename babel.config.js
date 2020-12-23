const presets = [ '@vue/cli-plugin-babel/preset' ]
let plugins = []

if (process.env["NODE_ENV"] === "test") {
  plugins.push('transform-require-context')
}

module.exports = { presets, plugins }