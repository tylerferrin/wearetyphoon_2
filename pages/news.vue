<template>
  <div class="news__container" id="content">
  </div>
</template>
<script>
import {createClient} from '~/plugins/contentful.js'
import _ from 'lodash'
import moment from 'moment'
import marked from 'marked'

const client = createClient()

export default {
  mounted () {
    let youTubeIframeString = '<div class="video-3-4"><iframe width="100%" height="100%" src="https://www.youtube.com/embed/videoId?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe></div>'

    let vimeoIframeString = '<div class="video-3-4"><iframe src="https://player.vimeo.com/video/videoId?title=0&byline=0&portrait=0" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div>'

    document.getElementById('content').innerHTML = marked(this.posts[0].content)

    let videos = document.getElementsByClassName('embedly-card')
    _.each(videos, (video) => {
      if (video.href.indexOf('youtube') > -1) {
        let videoId = video.href.split('v=')
        video.parentElement.innerHTML = youTubeIframeString.replace('videoId', videoId[1])
      } else if (video.href.indexOf('vimeo') > -1) {
        let videoId = video.href.split('vimeo.com/')
        video.parentElement.innerHTML = vimeoIframeString.replace('videoId', videoId[1])
      }
    })
  },
  asyncData (context) {
    return client.getEntries()
      .then((response) => {
        let filteredDownResponse = _.map(response.items, (item) => {
          return Object.assign({}, item.fields, item.sys.contentType.sys)
        })
        filteredDownResponse = _.each(filteredDownResponse, (item) => {
          item.publishDate = moment(item.date)
        })
        return {
          posts: _.orderBy(_.filter(filteredDownResponse, (item) => {
            return item.id === 'news'
          }), 'publishDate')
        }
      })
      .catch(console.error)
  }
}
</script>

<style lang="sass">
.embedly-card #cards .card.video .brd a
  display: none !important
.video-3-4
  position: relative
  width: 100%
  z-index: 0
  &::before
    content: ' '
    display: block
    padding-bottom: 56.25%
  iframe
    position: absolute
    top: 0
    right: 0
    bottom: 0
    left: 0
    height: 100%
    width: 100%
</style>
