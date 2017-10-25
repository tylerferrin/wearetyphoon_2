<template>
  <ShowList :shows="shows" />
</template>
<script>
import {createClient} from '~/plugins/contentful.js'
import _ from 'lodash'
import moment from 'moment'
import ShowList from '~/components/ShowList.vue'

const client = createClient()

export default {
  components: {
    ShowList
  },
  data () {
    return {
      shows: this.$store.state.shows
    }
  }
}
</script>
