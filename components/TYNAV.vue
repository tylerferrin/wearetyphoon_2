<template>
  <div class="nav">
    <transition name=fade>
      <h4
      v-on:click="toggleNav()"
      v-if="isNavShowing == false"
      class="menu-button">+</h4>
    </transition>
    <transition name="slideIn">
      <ul class="nav__ul" v-if="isNavShowing">
        <li>
          <nuxt-link to="/news">News</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/music">Music</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/tour">Tour</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/video">Video</nuxt-link>
        </li>
        <li>
          <a href="http://wearetyphoon.merchline.com" target="_blank">Webshop</a>
        </li>
        <li>
          <nuxt-link to="/about">about</nuxt-link>
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
      isNavShowing: false,
      toggleNav: () => {
        this.isNavShowing = !this.isNavShowing
      }
    }
  }
}
</script>
<style lang="sass">
.nav
  position: relative
  display: flex
  flex-direction: column
  justify-content: flex-start
  width: 25%
  &__ul
    display: flex
    flex-direction: column
    justify-content: space-between
    margin: 0
    padding-left: 42px
    z-index: 99999
    li
      list-style-type: none
      a
        padding: 10px 20px
        text-decoration: none
        display: inline-block
        width: auto
        color: black
        font-family: 'Futura'
        font-size: 13px
        text-transform: uppercase
        letter-spacing: 1px
        transition: transform .25s ease-in-out, color .25s ease-out
        &:hover
          cursor: pointer
          transform: translate(-5px)
          color: #d4af37
  &__ul--close
    display: block !important
    margin-top: 50px !important
    font-family: 'Futura'
    font-size: 13px
    transition: transform .25s ease-out, color .25s ease-out
    padding: 10px 20px
    &:hover
      transform: translate(0) !important
      cursor: pointer
      color: #d4af37

// '+' to open Nav options
.menu-button
  font-family: 'Futura'
  position: absolute
  top: -70px
  left: 53px
  padding: 10px
  font-weight: normal
  font-size: 24px
  z-index: 10
  transform: scale(.8)
  transition: all .25s ease-out
  &:hover
    cursor: pointer
    transform: scale(1)
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
