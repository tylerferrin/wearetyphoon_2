import {createClient} from '~/plugins/contentful.js'
import _ from 'lodash'
// import moment from 'moment'

const client = createClient()

export const state = () => ({
  freshPost: '',
  allPostUrls: [],
  posts: [],
  shows: [],
  about: [],
  vidoes: [],
  currentPostIndex: null
})

export const mutations = {
  updateNews (state, payload) {
    state.freshPost = payload.allUrls[0]
  },
  updateAllPostsUrls (state, payload) {
    state.allPostUrls = payload.allUrls
  },
  setPosts (state, posts) {
    state.posts = posts
  },
  setShows (state, shows) {
    state.shows = shows
  },
  setAbout (state, about) {
    state.about = about
  },
  setVideos (state, vidoes) {
    state.vidoes = vidoes
  },
  setCurrentPostIndex (state, index) {
    state.currentPostIndex = index
  }
}

export const actions = {
  async nuxtServerInit ({commit}) {
    return client.getEntries()
      .then((response) => {
        let filteredDownResponse = _.map(response.items, (item) => {
          return Object.assign({}, item.fields, item.sys.contentType.sys)
        })
        // filteredDownResponse = _.each(filteredDownResponse, (item) => {
        //   item.publishDate = item.date
        // })
        let shows = _.orderBy(_.filter(filteredDownResponse, (item) => {
          return item.id === 'show'
        }), 'date')
        let videos = _.filter(filteredDownResponse, (item) => {
          return item.id === 'video'
        })
        let allPosts = _.orderBy(_.filter(filteredDownResponse, (item) => {
          return item.id === 'news'
        }), 'publishDate', ['desc'])
        let allPostsWithSlugs = _.each(allPosts, (post) => {
          post.title = post.title.split(' ').join('-')
        })
        let allPostUrls = {allUrls: _.map(allPostsWithSlugs, 'title')}
        commit('updateNews', allPostUrls)
        commit('updateAllPostsUrls', allPostUrls)
        commit('setPosts', allPosts)
        commit('setShows', shows)
        commit('setVideos', videos)
      })
      .catch(console.error)
  }
}
