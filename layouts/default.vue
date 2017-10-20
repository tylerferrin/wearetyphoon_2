<template>
  <section class="container">
    <Masthead />
    <div class="container__content">
      <nuxt />
    </div>
  </section>
</template>

<script>
import Masthead from '~/components/Masthead.vue'

export default {
  components: {
    Masthead
  }
}
</script>

<style lang="sass">
body
  margin: 0

.container
  height: 100vh
  display: block
  background-image: url('~/assets/typhoon_press_photo.jpg')
  background-position: center
  background-size: contain
  background-repeat: no-repeat
  &__content
    margin: 0
    margin-left: 250px
    height: 80vh
    position: relative
    top: 20vh
</style>
