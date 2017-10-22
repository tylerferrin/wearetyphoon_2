<template>
  <div class="footer__container">
    <form class="footer__container--email__signup">
      <input type="email" name="" placeholder="Newsletter Sign-up" value="">
    </form>
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
  </div>
</template>
<style lang="sass">
.footer
  &__container
    position: relative
    bottom: -1px
    left: 0
    padding: 25px 100px 0 62px
    height: 150px
    background-color: #d4af37
  &__container--email__signup
    input
      margin-top: 15px
      width: 250px
      border: 0
      border-bottom: 2px solid black
      padding-bottom: 5px
      background-color: transparent
      &::placeholder
        font-family: 'Futura'
        color: black
        letter-spacing: 2px
        text-transform: uppercase
      &:focus
        outline: none
  &__container--social-list
    margin: 0
    margin-top: 10px
    padding: 0
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
