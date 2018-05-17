<template>
  <div class="post__container">
    <div
      class="page-turners"
      v-bind:class="{ hidePageTurners: isMobileNavListShowing }"
    >
      <nuxt-link :to="previous()" v-if="doesPreviousExist()">
        <img src="~/assets/arrow.png" class="left-arrow">
        Newer
      </nuxt-link>
      <nuxt-link :to="older()" v-if="doesOlderExist()">
        Older
        <img src="~/assets/arrow.png" class="right-arrow">
      </nuxt-link>
    </div>

    <h1 class="post-title">{{ titleThatKebab(post.title) }}</h1>
    <h5>{{ dateFormat(post.publishDate) }}</h5>
    <div class="post__container--content" id="content"></div>
    <div class="buffer"></div>
  </div>
</template>

<script>
import moment from 'moment'
import _ from 'lodash'
import marked from 'marked'
import { mapState } from 'vuex'

export default {
  computed: mapState([
    'isMobileNavListShowing'
  ]),
  data () {
    return {
      dateFormat: (date) => {
        return moment(date).format('MM.DD.YYYY')
      },
      titleThatKebab: (title) => {
        return title.split('-').join(' ')
      },
      doesPreviousExist: () => {
        if (this.$store.state.currentPostIndex - 1 >= 0) {
          return true
        }
      },
      previous: () => {
        return '/news/' + this.$store.state.allPostUrls[this.$store.state.currentPostIndex - 1]
      },
      doesOlderExist: () => {
        if (this.$store.state.allPostUrls[this.$store.state.currentPostIndex + 1]) {
          return true
        }
      },
      older: () => {
        return '/news/' + this.$store.state.allPostUrls[this.$store.state.currentPostIndex + 1]
      }
    }
  },
  beforeCreate () {
    let postNeeded = this.$route.params.post
    this.$store.commit('setCurrentPostIndex', this.$store.state.allPostUrls.indexOf(postNeeded))
    this.post = this.$store.state.posts[this.$store.state.currentPostIndex]
  },
  mounted () {
    const postContent = document.getElementById('content')

    let youTubeIframeString = '<iframe width="560" height="315" src="https://www.youtube.com/embed/videoId?rel=0&amp;showinfo=0&autoplay=1" frameborder="0" allowfullscreen></iframe>'

    postContent.innerHTML = marked(this.post.content)

    let videos = document.querySelectorAll('iframe')
    _.each(videos, (video) => {
      let parent = video.parentNode
      let wrapper = document.createElement('div')
      wrapper.setAttribute('style', 'position: relative')
      wrapper.classList.add('video-wrapper')
      parent.replaceChild(wrapper, video)
      const src = video.src
      let iframeString = ''
      let vId = ''

      vId = src.split('embed/')[1]
      iframeString = youTubeIframeString

      let playButton = document.createElement('div')
      playButton.classList.add('play-button')

      var image = document.createElement('img')
      var source = 'https://img.youtube.com/vi/' + vId + '/maxresdefault.jpg'
      image.src = source
      image.addEventListener('load', (function () {
        wrapper.appendChild(image)
        wrapper.appendChild(playButton)
      }()))

      wrapper.addEventListener('click', () => {
        wrapper.innerHTML = ''
        wrapper.innerHTML = '<div class="video-3-4">' + iframeString.replace('videoId', vId) + '</div>'
      })
    })
  }
}
</script>

<style lang="sass">
  .post
    &__container
      position: relative
      h1
        display: inline-block
        margin: 0 0 16px
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
    z-index: 0
    cursor: pointer

  div.play-button
    position: absolute
    height: 100px
    width: 100px
    color: white
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
    z-index: 2
    text-align: center
    background-color: red
    opacity: .9
    border-radius: 100px
    cursor: pointer
    &::after
      content: 'PLAY'
      display: block
      position: relative
      top: 50%
      transform: translate(0%, -50%)
      font-family: 'Futura'
      letter-spacing: 2px


  .video-wrapper
    margin: 32px 0

  .buffer
    margin-bottom: 200px

  .post-title
    display: block
    width: 100%
    padding-top: 16px
    border-top: 2px solid black

  .page-turners
    position: absolute
    top: -40px
    display: flex
    flex-direction: row
    justify-content: space-between
    width: 100%
    z-index: 10
    opacity: 1
    @media screen and (max-width: 705px)
      top: -32px
    a
      display: inline-block
      text-decoration: none
      color: black
      text-transform: uppercase
      font-family: 'Futura'
      font-size: 12px
      letter-spacing: 1px
      @media screen and (max-width: 705px)
        font-size: 10px
      &:hover
        cursor: pointer
      img
        height: 25px
        width: 25px
        position: relative
        top: 8px
        @media screen and (max-width: 705px)
          height: 15px
          width: 15px
          top: 5px
    .left-arrow
      transform: rotate(-90deg)
      margin-right: 10px
    .right-arrow
      transform: rotate(90deg)
      margin-left: 14px
  .hidePageTurners
    opacity: 0

  </style>
