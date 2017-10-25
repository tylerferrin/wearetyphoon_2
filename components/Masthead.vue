<template>
  <div class="mh__container">
    <nuxt-link to="/">
      <div class="mh__logo-container">
        <img src="~/assets/typhoon_type.png" alt="TYPHOON">
      </div>
    </nuxt-link>
    <p class="page-title">{{ pageTitle }}</p>
    <div class="page-turners" v-if="pageTitle === 'news' ">
      <nuxt-link :to="older()" v-if="doesOlderExist()">
        Older
        <img src="~/assets/arrow.png" class="right-arrow">
      </nuxt-link>
      <nuxt-link :to="previous()" v-if="doesPreviousExist()">
          <img src="~/assets/arrow.png" class="left-arrow">
          Newer
        </nuxt-link>
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
      pageTitle: null,
      doesPreviousExist: () => {
        if (this.$store.state.currentPostIndex - 1 >= 0) {
          return true
        }
      },
      previous: () => {
        return '/news/' + this.$store.state.allPostUrls[this.$store.state.currentPostIndex - 1]
      },
      doesOlderExist: () => {
        if (this.$store.state.allPostUrls[this.$store.state.currentPostIndex + 1]) {
          return true
        }
      },
      older: () => {
        return '/news/' + this.$store.state.allPostUrls[this.$store.state.currentPostIndex + 1]
      }
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
      height: 65px

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

.page-turners
  position: absolute
  top: 140px
  right: 25px
  margin: 0
  width: 105px
  z-index: 25
  a:nth-child(2)
    margin-top: 25px
  a
    display: block
    text-decoration: none
    color: black
    text-transform: uppercase
    font-family: 'Futura'
    font-size: 14px
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
    margin-left: 14px

</style>
