<template>
  <div class="mh__container">
    <nuxt-link to="/">
    <div class="mh__logo-container">
        <img src="~/assets/typhoon_type.png" alt="TYPHOON">
    </div>
  </nuxt-link>
    <TYNAV />
  </div>
</template>
<script>
import TYNAV from '~/components/TYNAV.vue'

export default {
  components: {
    TYNAV
  }
}
</script>
<style lang="sass">

.mh
  &__container
    position: absolute
    top: 0
    display: block
    width: 100vw
    height: calc(100vh / 5)
    background-color: white
  &__logo-container
    display: flex
    flex-direction: row
    justify-content: flex-start
    img
      z-index: 9
      width: 256px
      height: 36px
      position: relative
      top: 25px
      left: 25px
</style>
