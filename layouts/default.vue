<template>
  <section class="container">
    <Masthead />
    <p class="pageTitle">{{ pageTitle }}</p>
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
  margin: 0
  font-family: 'Helvetica', sans-serif
  font-weight: 100 !important

.container
  height: 100vh
  display: block
  background-image: url('~/assets/typhoon_press_photo.jpg')
  background-position: center
  background-size: contain
  background-repeat: no-repeat
  transition: all .25s ease-in-out

.pageTitle
  position: absolute
  top: 25px
  right: 25px
  font-family: 'Futura'
  font-size: 16px
  font-weight: bold
  color: black
  z-index: 999999
  text-transform: uppercase
  padding-bottom: 2.5px
  border-bottom: 2px solid black
  letter-spacing: 1.5px
  margin: 0

.notIndex
  height: 100vh
  width: 100vw
  background-color: white
  opacity: .8
  transition: all .35s

.index
  height: 100vh
  width: 100vw
  transition: all .35s

.pageContent
  margin-left: 15%
  padding: 150px 200px 0px 25px

.page-enter-active,
.page-leave-active
  transition: transform .4s ease-in-out, opacity .25s ease-out
.page-enter,
.page-leave-to
  transform: translateY(50%)
  opacity: 0
</style>
