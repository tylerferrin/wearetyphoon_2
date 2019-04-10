<template>
  <section class="nav-list">
    <ul class="nav__ul" v-if="isMobile === false || isMobile && isMobileNavListShowing">
      <li>
        <nuxt-link :to="freshNews()">News</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/tour">Tour</nuxt-link>
      </li>
      <li>
        <a href="http://wearetyphoon.bandcamp.com" target="_blank">Store</a>
      </li>
      <li>
        <nuxt-link to="/contact">contact</nuxt-link>
      </li>
      <li>
        <a class="social-link" target="_blank" href="http://instagram.com/typhoonfamilyvacation">Instagram</a>
      </li>
      <li>
        <a class="social-link" target="_blank" href="https://www.facebook.com/wearetyphoon/">Facebook</a>
      </li>
      <li>
        <a class="social-link" target="_blank" href="http://twitter.com">Twitter</a>
      </li>
      <li
        v-if="isMobile === true"
        class="nav__ul--close"
        @click="closeNav()"
      >
        X
      </li>
    </ul>
  </section>
</template>
<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      freshNews: () => {
        return '/news/' + this.$store.state.freshPost
      }
    }
  },

  methods: {
    closeNav () {
      this.$store.commit('setIsMobileNavListShowing', false)
    }
  },

  computed: mapState([
    'isMobile',
    'isMobileNavListShowing'
  ])
}
</script>
<style lang="sass">
  .nav
    position: relative
    display: flex
    flex-direction: column
    justify-content: flex-start
    width: 25%
    @media screen and (max-width: 705px)
      width: 100%
      z-index: 0
    &__ul
      display: flex
      flex-direction: column
      justify-content: space-between
      margin: 0
      padding-left: 7px
      z-index: 99999
      position: relative
      top: 112px
      li
        list-style-type: none
        @media (max-width: 705px)
          display: flex
          flex-direction: row
          justify-content: center
        a
          padding: 10px 20px
          text-decoration: none
          display: inline-block
          width: auto
          color: black
          font-family: 'Futura'
          font-size: 12px
          text-transform: uppercase
          letter-spacing: 1px
          transition: transform .25s ease-in-out, color .25s ease-out
          @media (max-width: 705px)
            font-size: 18px
            transition: color .25s ease-out
          &:hover
            cursor: pointer
            transform: translate(-5px)
            color: #d4af37
            @media (max-width: 705px)
              transform: none !important
        .social-link
          font-size: 10px
          @media (min-width: 705px)
            display: none
    &__ul--close
      margin-top: 50px !important
      padding: 10px 20px
      font-family: 'Futura'
      font-size: 13px
      transition: transform .25s ease-out, color .25s ease-out
      @media screen and (max-width: 705px)
        font-size: 20px
        // display: flex !important
        flex-direction: row !important
        justify-content: center !important
      &:hover
        transform: translate(0) !important
        cursor: pointer
        color: #d4af37
</style>
