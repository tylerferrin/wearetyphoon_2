<template>
  <section class="container">
    <Masthead />
    <div v-bind:class="{ notIndex: notIndex, index: !notIndex }">
      <div class="pageContent">
        <nuxt />
        <div class="buffer-zone">

        </div>
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
      notIndex: false
    }
  },
  mounted () {
    this.getWindowSize = () => window.innerWidth

    this.setIsMobile = (isMobile) => {
      this.$store.commit('setIsMobile', isMobile)
    }

    this.checkForMobile = () => {
      this.getWindowSize() < 705 ? this.setIsMobile(true) : this.setIsMobile(false)
    }

    window.addEventListener('resize', this.checkForMobile)

    this.checkForMobile()

    if (this.$route.name !== 'index') {
      this.notIndex = true
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
  box-sizing: border-box
  margin: 0
  font-family: 'Helvetica', sans-serif
  font-weight: 100 !important

.container
  min-height: 100vh
  display: block
  background-image: url('~/assets/typhoon_press_photo.jpg')
  background-attachment: fixed
  background-position: center
  background-size: contain
  background-repeat: no-repeat
  transition: all .25s ease-in-out

.notIndex
  min-height: 100vh
  width: 100vw
  background-color: rgba(255,255,255, .9)
  transition: all .35s

.index
  height: 100%
  width: 100vw
  transition: all .35s

.pageContent
  margin: 0 177px
  padding: 44px 50px 0
  background-color: transparent !important
  height: auto
  @media (max-width: 881px)
    padding: 44px 15px 44px 35px !important
  @media (max-width: 705px)
    padding: 20px 25px !important
    margin: 0
    z-index: 11
  p:first-of-type
    margin-top: 0
  .buffer-zone
    height: 25px

.page-enter-active,
.page-leave-active
  transition: transform .4s ease-in-out, opacity .25s ease-out
.page-enter,
.page-leave-to
  transform: translateY(50%)
  opacity: 0
</style>
