<template>
  <div class="post__container">
    <h1>{{ titleThatKebab(post.title) }}</h1>
    <h5>{{ dateFormat(post.publishDate) }}</h5>
    <div class="post__container--content" id="content"></div>
    <div class="buffer"></div>
  </div>
</template>

<script>
import moment from 'moment'
import _ from 'lodash'
import marked from 'marked'

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
    z-index: 10
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
    margin-bottom: 24px
  .buffer
    margin-bottom: 200px


  </style>
