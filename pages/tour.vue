<template>
  <ShowList :shows="shows" />
</template>
<script>
import * as contentful from 'contentful'
import _ from 'lodash'
import moment from 'moment'
import ShowList from '~/components/ShowList.vue'

export default {
  components: {
    ShowList
  },
  data () {
    return {

    }
  },
  asyncData (context) {
    const client = contentful.createClient({
      space: process.env.spaceId,
      accessToken: process.env.accessToken
    })
    return client.getEntries()
      .then((response) => {
        let filteredDownResponse = _.map(response.items, (item) => {
          return Object.assign({}, item.fields, item.sys.contentType.sys)
        })
        filteredDownResponse = _.each(filteredDownResponse, (item) => {
          item.date = moment(item.date)
        })
        return {
          shows: _.orderBy(_.filter(filteredDownResponse, (item) => {
            return item.id === 'show'
          }), 'date'),
          videos: _.filter(filteredDownResponse, (item) => {
            return item.id === 'video'
          })
        }
      })
      .catch(console.error)
  }
}
</script>
