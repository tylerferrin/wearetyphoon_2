<template>
  <div class="mh__container">
    <div class="mh__logo-container">
        <img src="~/assets/TYPHOON_OFFERINGS_TYPEFACE.svg" alt="TYPHOON">
    </div>
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

</style>
