<template>
  <section class="container">
    <Masthead />
    <div class="body">

    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'
import Masthead from '~/components/Masthead.vue'

export default {
  components: {
    Logo,
    Masthead
  }
}
</script>

<style lang="sass">
.body
  height: 80vh
  display: block
  background-image: url('~/assets/typhoon_press_photo.jpg')
  background-position: center
  background-size: contain
  background-repeat: no-repeat
</style>
