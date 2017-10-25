<template>
  <div class="post__container">
    <h1>{{ titleThatKebab(post.title) }}</h1>
    <h5>{{ dateFormat(post.publishDate) }}</h5>
    <div class="post__container--content" id="content"></div>
    <div class="buffer"></div>
  </div>
</template>

<script>
import {createClient} from '~/plugins/contentful.js'
import moment from 'moment'
import _ from 'lodash'
import marked from 'marked'
import kebabCase from 'kebab-case'

const client = createClient()

export default {
  data () {
    return {
      dateFormat: (date) => {
        return moment(date).format('MM.DD.YYYY')
      },
      titleThatKebab: (title) => {
        return title.split('-').join(' ')
      }
    }
  },
  beforeCreate (context) {
    let postNeeded = this.$route.params.post
    this.$store.commit('setCurrentPostIndex', this.$store.state.allPostUrls.indexOf(postNeeded))
    this.post = this.$store.state.posts[this.$store.state.currentPostIndex]
  },
  mounted () {
    const postContent = document.getElementById('content')

    let youTubeIframeString = '<iframe width="560" height="315" src="https://www.youtube.com/embed/videoId?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>'

    let vimeoIframeString = '<iframe src="https://player.vimeo.com/video/videoId?title=0&byline=0&portrait=0" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'

    postContent.innerHTML = marked(this.post.content)

    let videos = document.getElementsByClassName('embedly-card')

    _.each(videos, (video) => {
      const src = video.href
      let iframeString = ''
      let vId = ''

      if (src.indexOf('youtube') > -1) {
        vId = src.split('v=')[1]
        iframeString = youTubeIframeString
      } else if (src.indexOf('vimeo') > -1) {
        vId = src.split('vimeo.com/')[1]
        iframeString = vimeoIframeString
      }

      video.parentElement.innerHTML = '<div class="video-3-4">' + iframeString.replace('videoId', vId) + '</div>'
    })
  }
}
</script>

<style lang="sass">
  .post
    &__container
      h1
        display: inline-block
        margin: 0 0 10px
        font-family: 'Futura'
        text-transform: uppercase
        letter-spacing: 1px
      h5
        margin-top: 0
        font-family: 'Futura'
        font-size: 10px
        margin-bottom: 50px
    &__container--left-arrow,
    &__container--right-arrow
      width: 25px
      height: 25px
  .video-3-4
    position: relative
    width: 100%
    z-index: 0
    &::before
      content: ' '
      display: block
      padding-bottom: 56.25%
      opacity: 0
    iframe
      position: absolute
      top: 0
      right: 0
      bottom: 0
      left: 0
      height: 100%
      width: 100%

  img
    width: 100%

  .buffer
    margin-bottom: 200px

  </style>
