require('dotenv').config()
const kebabCase = require('kebab-case')
const contentful = require('contentful')
const _ = require('lodash')
const moment = require('moment')

const config = {
  space: process.env.SPACE_ID,
  accessToken: process.env.ACCESS_TOKEN
}

const client = contentful.createClient(config)

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'wearetyphoon_2',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: false,
  /*
  ** Environment Variables
  */
  env: {
    spaceId: process.env.SPACE_ID,
    accessToken: process.env.ACCESS_TOKEN
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules|pages|components)/
        })
      }
    }
  },
  plugins: [
    '~/plugins/contentful'
  ],
  generate: {
    routes: function () {
      return client.getEntries()
      .then((response) => {
        let filteredDownResponse = _.map(response.items, (item) => {
          return Object.assign({}, item.fields, item.sys.contentType.sys)
        })
        filteredDownResponse = _.each(filteredDownResponse, (item) => {
          item.publishDate = moment(item.date)
        })
        let posts = _.orderBy(_.filter(filteredDownResponse, (item) => {
          return item.id === 'news'
        }), 'publishDate')
        return posts.map((post) => {
          let title = post.title.toLowerCase()
          return {
            route: '/news/' + kebabCase(post.title).split('-')[1],
            payload: post
          }
        })


      })
      .catch(console.error)
    }
  }
}
