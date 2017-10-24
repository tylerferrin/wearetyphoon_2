<template>
  <section class="container">
    <Masthead />
    <div v-bind:class="{ notIndex: notIndex, index: !notIndex }">
      <div class="pageContent">
        <nuxt />
      </div>
    </div>
    <TYFooter />
  </section>
</template>

<script>
import Masthead from '~/components/Masthead.vue'
import TYFooter from '~/components/TYFooter.vue'

export default {
  components: {
    Masthead,
    TYFooter
  },
  data () {
    return {
      notIndex: false,
      pageTitle: null
    }
  },
  mounted () {
    if (this.$route.name !== 'index') {
      this.notIndex = true
      this.pageTitle = this.$route.name
    } else {
      this.notIndex = false
      this.pageTitle = null
    }
  },
  watch: {
    '$route' (to, from) {
      if (to.name !== 'index') {
        this.notIndex = true
        this.pageTitle = to.name
      } else {
        this.notIndex = false
        this.pageTitle = null
      }
    }
  }
}
</script>

<style lang="sass">
body
  box-sizing: border-box
  margin: 0
  font-family: 'Helvetica', sans-serif
  font-weight: 100 !important

.container
  height: 100vh
  display: block
  background-image: url('~/assets/typhoon_press_photo.jpg')
  background-attachment: fixed
  background-position: center
  background-size: contain
  background-repeat: no-repeat
  transition: all .25s ease-in-out

.notIndex
  height: 100vh
  width: 100vw
  background-color: rgba(255,255,255, .9)
  transition: all .35s

.index
  height: 100vh
  width: 100vw
  transition: all .35s

.pageContent
  margin: 0 177px
  padding: 7.5px 50px
  background-color: transparent
  p:first-of-type
    margin-top: 0

.page-enter-active,
.page-leave-active
  transition: transform .4s ease-in-out, opacity .25s ease-out
.page-enter,
.page-leave-to
  transform: translateY(50%)
  opacity: 0
</style>
