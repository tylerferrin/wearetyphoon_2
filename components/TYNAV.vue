<template>
  <div
    class="nav"
    v-bind:class="{
      mobileNav: isMobile && isMobileNavListShowing,
      noContainer: !isMobile,
      isMobileNavListShowing: isMobileNavListShowing
    }">
    <transition name="fade">
      <h4
        v-on:click="openNav()"
        v-if="isMobile && !isMobileNavListShowing"
        class="hamb-button"
      >
        MENU
      </h4>
    </transition>

    <transition name="slideIn">
      <NavList />
    </transition>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import NavList from './NavList'

export default {
  components: {
    NavList
  },

  methods: {
    openNav () {
      this.$store.commit('setIsMobileNavListShowing', true)
    },
    closeNav () {
      this.$store.commit('setIsMobileNavListShowing', false)
    }
  },

  computed: mapState([
    'isMobile',
    'isMobileNavListShowing'
  ]),

  watch: {
    '$route' (to, from) {
      this.closeNav()
    }
  }
}
</script>
<style lang="sass">
@media (max-width: 705px)
  .nav.mobileNav
    background-color: white !important
  .nav.isMobileNavListShowing
    height: 100vh
  .nav.noContainer
    transition: height .25s ease-in
    height: 0

.hamb-button
  font-family: 'Futura'
  position: absolute
  top: -18px
  right: 22px
  padding: 10px
  padding-right: 0
  font-weight: normal
  font-size: 14px
  letter-spacing: 4px
  z-index: 10
  transition: all .25s ease-out
  z-index: 999999999999
  @media (min-width: 705px)
    display: none
  &:hover
    cursor: pointer
    color: #d4af37
// nav slideIn classes
.slideIn-enter-active,
.slideIn-leave-active
  transition: transform .2s ease-in-out .1s, opacity .2s ease-out .1s
.slideIn-enter,
.slideIn-leave-to
  transform: translateY(50px)
  opacity: 0

// simple fade transition
.fade-enter-active,
.fade-leave-active
  transition: opacity .25s ease-in-out .1s
.fade-enter,
.fade-leave-to
  opacity: 0

// active link behaviors
.nuxt-link-active
  color: #d4af37 !important
</style>
