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
        <nuxt-link to="/video">Videos</nuxt-link>
      </li>
      <li>
        <a href="#">Webshop</a>
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
    padding-left: 65px
    z-index: 99999
    li
      list-style-type: none
      a
        text-decoration: none
        display: inline-block
        width: auto
        padding: 7.5px 0
        color: black
        font-family: 'Futura'
        text-transform: uppercase
        letter-spacing: 1px
        transition: transform .25s ease-in-out
        &:hover
          cursor: pointer
          transform: translate(-15px)
  &__ul--close
    display: block !important
    margin-top: 50px !important
    font-family: 'Futura'
    &:hover
      transform: translate(0) !important
      cursor: pointer

.menu-button
  font-family: 'Futura'
  position: absolute
  top: -65px
  left: 65px
  font-weight: normal
  font-size: 24px
  z-index: 1
  &:hover
    cursor: pointer

.slideIn-enter-active,
.slideIn-leave-active
  transition: transform .2s ease-in-out .1s
.slideIn-enter,
.slideIn-leave-to
  transform: translate(-200px)


.fade-enter-active,
.fade-leave-active
  transition: opacity .25s ease-in-out .1s
.fade-enter,
.fade-leave-to
  opacity: 0
</style>
