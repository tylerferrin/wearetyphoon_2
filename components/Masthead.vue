<template>
  <div class="mh__container">
    <nuxt-link to="/">
      <div class="mh__logo-container">
        <img src="~/assets/typhoon_type.png" alt="TYPHOON">
      </div>
    </nuxt-link>
    <p class="page-title">{{ pageTitle }}</p>
    <div class="page-turners" v-if="pageTitle === 'news' ">
      <p><img src="~/assets/arrow.png" class="left-arrow">Newer</p>
      <p>Older<img src="~/assets/arrow.png" class="right-arrow"></p>
    </div>
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
      this.notIndex = true
      if (routeName === 'news-post') {
        this.pageTitle = 'news'
      } else {
        this.pageTitle = routeName
      }
    } else {
      this.notIndex = false
      this.pageTitle = null
    }
  },
  watch: {
    '$route' (to, from) {
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
    height: 140px
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

.page-turners
  position: absolute
  top: 125px
  right: 25px
  margin: 0
  width: 100px
  z-index: 25
  p:nth-child(2)
    float: right
  p
    display: block
    text-transform: uppercase
    font-family: 'Futura'
    float: right
    letter-spacing: 1px
    &:hover
      cursor: pointer
    img
      height: 25px
      width: 25px
      position: relative
      top: 7px
  .left-arrow
    transform: rotate(-90deg)
    margin-right: 10px
  .right-arrow
    transform: rotate(90deg)
    margin-left: 10px

</style>
