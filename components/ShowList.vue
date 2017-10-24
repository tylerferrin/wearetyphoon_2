<template>
  <div class="showList__container">
    <div v-for="show in shows" class="showList__header-row">
      <p>{{ show.date }}</p>
      <p>{{ show.venue }}</p>
      <p>{{ show.city }}</p>
      <a class="showList__ticket-button" v-if="!show.soldOut":href="show.linkToPurchase" target="_blank">TICKETS</a>
      <a class="showList__sold-out" v-if="show.soldOut" :href="show.linkToPurchase" target="_blank">TICKETS</a>
      <a class="showList__rsvp-button">INFO</a>
    </div>
  </div>
</template>
<script>
import moment from 'moment'
import _ from 'lodash'

export default {
  props: ['shows'],
  created () {
    this.shows = _.each(this.shows, (show) => {
      show.date = moment(show.date).format('MM.DD.YYYY')
    })
  }
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
      text-transform: uppercase

  &__ticket-button,
  &__rsvp-button
    text-decoration: none
    text-align: center
    font-family: 'Futura'
    letter-spacing: 1px
    font-size: 12px
    font-weight: bold
    padding: 5px
    background-color: transparent
    border: 2px solid black
    color: black
    transition: background-color .25s ease-out
    &:hover
      color: white
      background-color: black
      cursor: pointer
  &__ticket-button
    width: 100px
  &__rsvp-button
    width: 75px
  &__sold-out
    color: red
    text-decoration: none
    font-family: 'Futura'
    width: 100px
    text-decoration: line-through
    text-align: center
    padding: 5px
    letter-spacing: 1px
    font-size: 12px
    font-weight: bold

</style>
