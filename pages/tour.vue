<template>
  <ShowList :shows="shows" />
</template>
<script>
import ShowList from '~/components/ShowList.vue'

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
