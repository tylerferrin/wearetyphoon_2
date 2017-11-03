<template>
  <div class="music">
    <div class="music__container">
      <div class="music__format-tabs">

        <div class="music__format-tabs--tab">
          <nuxt-link to="/music" @click.native="showAlbumGrid()">
            <h1>Albums</h1>
          </nuxt-link>
        </div>

        <div class="music__format-tabs--center-line"></div>

        <div class="music__format-tabs--tab">
          <nuxt-link to="/music" @click.native="showVideoGrid()">
            <h1>Videos</h1>
          </nuxt-link>
        </div>
      </div>
    </div>
    <nuxt-child :props="props" />
  </div>
</template>
<script>
  export default {
    data () {
      return {
        props: {
          isAlbumGridShowing: true,
          isVideoGridShowing: false
        },
        showAlbumGrid: () => {
          this.props.isAlbumGridShowing = true
          this.props.isVideoGridShowing = false
        },
        showVideoGrid: () => {
          this.props.isAlbumGridShowing = false
          this.props.isVideoGridShowing = true
        }
      }
    }
  }
</script>
<style lang="sass">
  .music
    position: relative
    top: -35px
    padding: 0 25px
    &__container
      background-color: transparent
      border-bottom: 2px solid black

    &__format-tabs
      text-align:  center
      width: 100%
      &--tab
        width: 49.75%
        display: inline-block
        transform: scale(.985)
        transition: color .25s ease-in, transform .25s ease-in .05s
        &:hover
          cursor: pointer
          transform: scale(1)
        &:hover h1
          color: darken(#d4af37, 10%)
        a
          text-decoration: none
          h1
            color: black
            letter-spacing: 2px
            font-family: 'Futura'
            font-size: 1rem
            text-transform: uppercase
            font-weight: 100 !important
            margin: 0
            padding-bottom: 15px
            transition: all .25s ease-in-out

      &--center-line
        display: inline-block
        width: .5%
        max-width: 2px
        background-color: black
        height: 24px
        position: relative
        top: 5px
        transition: all .25s ease-in-out

</style>
