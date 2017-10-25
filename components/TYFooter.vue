<template>
  <div class="footer__container">
    <ul class="footer__container--social-list">
      <li>
        <a class="social-link" href="http://instagram.com/typhoonfamilyvacation">Instagram</a>
      </li>
      <li>
        <a class="social-link" href="http://facebook.com">Facebook</a>
      </li>
      <li>
        <a class="social-link" href="http://twitter.com">Twitter</a>
      </li>
    </ul>
    <form class="footer__container--email__signup"
          action="http://www.fanbridge.com/signup/fansignup_form.php?userid=206848" method="post">
          <div class="footer__container--input-div">
            <input type="email" name="" placeholder="Newsletter Sign-up" value="" />
            <input type="submit" value=" " disabled/>
          </div>
    </form>
  </div>
</template>
<script>
</script>
<style lang="sass">
.footer
  &__container
    position: fixed
    top: 0
    right: 0
    height: 100vh
    width: 250px
    background-color: transparent
    display: flex
    flex-direction: column
    justify-content: flex-end

  &__container--email__signup
    padding: 0 25px 0 0
  &__container--input-div
    position: relative
    margin: 52px 0
    width: 150px
    float: right
    input:first-child
      width: 100%
      border: 0
      border-bottom: 2px solid black
      background-color: transparent
      padding-bottom: 2.5px
      &::placeholder
        font-family: 'Futura'
        font-size: 8px
        color: black
        letter-spacing: 2px
        text-transform: uppercase
      &:focus
        outline: none
    input:nth-child(2)
      position: absolute
      top: 2px
      right: 0
      border: 0
      background-color: transparent
      padding: 0
      margin: 0
      width: 10px
      background-image: url('~/assets/arrow.svg')
      background-repeat: no-repeat
      background-position: center
      background-size: contain

  &__container--social-list
    margin: 0
    margin-top: 10px
    padding: 0
    text-align: right
    position: relative
    right: 25px
    li
      list-style-type: none
      padding: 2.5px 0
      a
        color: black
        font-family: 'Futura'
        text-decoration: none
        font-weight: normal
        font-size: 10px
        letter-spacing: 1px
</style>
