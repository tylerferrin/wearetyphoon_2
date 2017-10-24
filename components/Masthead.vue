<template>
  <div class="mh__container">
    <nuxt-link to="/">
      <div class="mh__logo-container">
        <img src="~/assets/typhoon_type.png" alt="TYPHOON">
      </div>
    </nuxt-link>
    <p class="pageTitle">{{ pageTitle }}</p>
    <TYNAV />
  </div>
</template>
<script>
import TYNAV from '~/components/TYNAV.vue'

export default {
  components: {
    TYNAV
  },
  data () {
    return {
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
        this.pageTitle = to.name
      } else {
        this.pageTitle = null
      }
    }
  }
}
</script>
<style lang="sass">

.mh
  &__container
    position: sticky
    top: 0
    display: block
    width: 100vw
    height: calc(100vh / 5)
    z-index: 10

  &__logo-container
    display: flex
    flex-direction: row
    justify-content: flex-start
    img
      z-index: 9
      width: 177px
      height: 25px
      position: relative
      top: 25px
      left: 25px

.pageTitle
  position: absolute
  top: 25px
  right: 25px
  font-family: 'Futura'
  font-size: 16px
  font-weight: bold
  color: black
  text-transform: uppercase
  padding-bottom: 2.5px
  border-bottom: 2px solid black
  letter-spacing: 1.5px
  margin: 0
</style>
