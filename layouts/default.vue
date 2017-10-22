<template>
  <section class="container">
    <Masthead />
    <div v-bind:class="{ notIndex: notIndex }">
      <div class="pageContent">
        <nuxt />
      </div>
    </div>
  </section>
</template>

<script>
import Masthead from '~/components/Masthead.vue'

export default {
  components: {
    Masthead
  },
  data () {
    return {
      notIndex: false
    }
  },
  mounted () {
    if (this.$route.name !== 'index') {
      this.notIndex = true
      console.log('true')
    } else {
      this.notIndex = false
    }
  },
  watch: {
    '$route' (to, from) {
      if (to.name !== 'index') {
        this.notIndex = true
      } else {
        this.notIndex = false
      }
    }
  }
}
</script>

<style lang="sass">
body
  margin: 0

.container
  height: 100vh
  display: block
  background-image: url('~/assets/typhoon_press_photo.jpg')
  background-position: center
  background-size: contain
  background-repeat: no-repeat
  transition: all .25s ease-in-out

.notIndex
  height: 100vh
  width: 100vw
  background-color: white
  opacity: .8
  transition: all .35s

.pageContent
  margin-left: 15%
  padding: 158px 100px

.page-enter-active,
.page-leave-active
  transition: transform .4s ease-in-out, opacity .25s ease-out
.page-enter,
.page-leave-to
  transform: translateY(50%)
  opacity: 0
</style>
