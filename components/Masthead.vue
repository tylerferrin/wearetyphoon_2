<template>
  <div class="mh__container">
    <nuxt-link to="/">
      <div class="mh__logo-container">
        <img src="~/assets/typhoon_type.png" alt="TYPHOON">
      </div>
    </nuxt-link>
    <p class="page-title">{{ pageTitle }}</p>
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
    const routeName = this.$route.name
    if (routeName !== 'index') {
      if (routeName === 'news-post') {
        this.pageTitle = 'news'
      } else {
        this.pageTitle = routeName
      }
    } else {
      this.pageTitle = null
    }
  },
  watch: {
    '$route' (to, from) {
      this.$router.push(to.path)
      const routeName = to.name
      if (routeName !== 'index') {
        if (routeName === 'news-post') {
          this.pageTitle = 'news'
        } else {
          this.pageTitle = routeName
        }
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
    height: 100px
    z-index: 10
    @media (max-width: 705px)
      background-color: white
      opacity: .97
      height: 80px

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
      @media (max-width: 705px)
        width: 140px
        height: 100%
.page-title
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
  @media (max-width: 705px)
    display: none


</style>
