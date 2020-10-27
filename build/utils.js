const path = require('path')

module.exports = {
  resolvePath: (pathName) => {
    return path.resolve('../', pathName)
  }
}
