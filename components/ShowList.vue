<template>
  <div class="showList__container">
    <div v-for="show in shows" class="showList__header-row">
      <p>{{ show.date.format('MM.DD.YYYY') }}</p>
      <p>{{ show.venue }}</p>
      <p>{{ show.city }}</p>
      <button class="showList__ticket-button" :href="show.linkToPurchase" target="_blank">Tickets</button>
      <button class="showList__rsvp-button">RSVP</button>
    </div>
  </div>
</template>
<script>
export default {
  props: ['shows']
}
</script>

<style lang="sass">
.showList
  &__header-row
    letter-spacing: 1px
    width: auto
    margin: 40px 0
    display: flex
    flex-direction: row
    justify-content: space-between
    &:first-child
      margin-top: 0
    p
      display: inline-block
      margin: 0
      font-family: 'Futura'
      font-size: 12px
      font-weight: bold
      width: 150px
      padding-top: 7px

  &__ticket-button,
  &__rsvp-button
    font-family: 'Futura'
    letter-spacing: 1px
    font-size: 12px
    font-weight: bold
    padding: 5px
    background-color: white
    border: 2px solid black
    color: black
    opacity: 1
    transition: background-color .25s ease-out
    &:hover
      color: white
      background-color: black
      cursor: pointer
  &__ticket-button
    width: 100px
  &__rsvp-button
    width: 75px
</style>
