<template>
  <section class="container">
    <Masthead />
    <p class="pageTitle">{{ pageTitle }}</p>
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
      notIndex: false,
      pageTitle: null
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
  top: 45px
  right: 100px
  font-family: 'Futura'
  font-size: 16px
  font-weight: bold
  color: black
  z-index: 999999
  text-transform: uppercase
  padding-bottom: 5px
  border-bottom: 5px solid black

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
