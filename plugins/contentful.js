const contentful = require('contentful')

const config = {
  space: process.env.spaceId,
  accessToken: process.env.accessToken
}

module.exports = {
  createClient () {
    return contentful.createClient(config)
  }
}
