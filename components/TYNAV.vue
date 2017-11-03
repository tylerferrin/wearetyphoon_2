<template>
  <div class="nav" v-bind:class="{mobileNav: isNavShowing, noContainer: !isNavShowing}">
    <transition name="fade">
      <h4
      v-on:click="toggleNav()"
      v-if="isNavShowing == false"
      class="menu-button">MENU</h4>
    </transition>
    <transition name="fade">
      <h4
      v-on:click="toggleNav()"
      v-if="isNavShowing == false"
      class="hamb-button">MENU</h4>
    </transition>
    <transition name="slideIn">
      <ul class="nav__ul" v-if="isNavShowing">
        <li>
          <nuxt-link :to="freshNews()">News</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/music">Music</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/tour">Tour</nuxt-link>
        </li>
        <!-- <li>
          <nuxt-link to="/video">Video</nuxt-link>
        </li> -->
        <li>
          <a href="http://wearetyphoon.store" target="_blank">Store</a>
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
        <li class="nav__ul--close"
            v-on:click="toggleNav()"
        >X</li>
      </ul>
    </transition>
  </div>
</template>

<script>

export default {
  data () {
    return {
      isNavShowing: true,
      toggleNav: () => {
        this.isNavShowing = !this.isNavShowing
      },
      freshNews: () => {
        return '/news/' + this.$store.state.freshPost
      }
    }
  },
  watch: {
    '$route' (to, from) {
      if (this.isNavShowing) {
        this.isNavShowing = false
      }
    }
  }
}
</script>
<style lang="sass">
@media (max-width: 705px)
  .nav.mobileNav
    background-color: white !important
  .nav.noContainer
    transition: height .25s ease-in
    height: 0
.nav
  position: relative
  display: flex
  flex-direction: column
  justify-content: flex-start
  width: 25%
  @media (max-width: 705px)
    width: 100% !important
    height: 100vh
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
        font-size: 10px
        font-weight: 400
        text-transform: uppercase
        letter-spacing: 1px
        transition: transform .25s ease-in-out, color .25s ease-out
        @media (max-width: 705px)
          font-size: 18px
          transition: color .25s ease-out
        &:hover
          cursor: pointer
          transform: translate(-5px)
          color: darken(#d4af37, 10%)
          @media (max-width: 705px)
            transform: none !important
      .social-link
        @media (min-width: 705px)
          display: none
        &:first-child
          font-size: 12px
  &__ul--close
    display: block !important
    margin-top: 50px !important
    font-family: 'Futura'
    font-size: 13px
    transition: transform .25s ease-out, color .25s ease-out
    padding: 10px 20px
    @media (max-width: 705px)
      font-size: 20px
      display: flex !important
      flex-direction: row !important
      justify-content: center !important
    &:hover
      transform: translate(0) !important
      cursor: pointer
      color: #d4af37

// '+' to open Nav options
.menu-button
  font-family: 'Futura'
  position: absolute
  top: 90px
  left: 15px
  padding: 10px
  font-weight: normal
  font-size: 14px
  z-index: 10
  transform: scale(.95)
  transition: all .25s ease-out
  @media (max-width: 705px)
    display: none
  &:hover
    cursor: pointer
    transform: scale(1)
    color: darken(#d4af37, 10%)

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
    color: darken(#d4af37, 10%)
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
  color: darken(#d4af37, 10%) !important
</style>
