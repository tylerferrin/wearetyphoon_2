<template>
<div class="nav">
  <transition name=fade>
    <h4
    v-on:click="toggleNav()"
    v-if="isNavShowing == false"
    class="menu-button">MENU</h4>
  </transition>
  <transition name="slideIn">
    <ul class="nav__ul" v-if="isNavShowing">
      <li>Live</li>
      <li>Music</li>
      <li>Webshop</li>
      <li>News</li>
      <li>About</li>
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
    li
      display: inline-block
      width: auto
      list-style: none
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
    &:hover
      transform: translate(0) !important

.menu-button
  font-family: 'Futura'
  position: absolute
  top: -35px
  left: 65px
  font-weight: normal

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
