<template>
  <div class="showList__container">
    <div v-for="show in shows" class="mobile__row">
      <div class="mobile__row--block-one">
        <p class="mobile__date-month-and-day">{{ dateNotYear(show.date) }}</p>
        <p class="mobile__date-year">{{ dateOnlyYear(show.date) }}</p>
      </div>
      <div class="mobile__row--block-two">
        <p class="mobile__venue">{{ show.venue }}</p>
        <p class="mobile__city">{{ show.city }}</p>
      </div>
      <div class="mobile__row--block-three">
        <a class="mobile__rsvp-button" :href="show.facebookEvent" target="_blank">INFO</a>
        <a class="mobile__ticket-button" v-if="!show.soldOut" :href="show.linkToPurchase" target="_blank">TICKETS</a>
        <a class="mobile__sold-out" v-if="show.soldOut" :href="show.facebookEvent" target="_blank">TICKETS</a>
      </div>
    </div>
  </div>
</template>
<script>
import moment from 'moment'
import _ from 'lodash'

export default {
  data () {
    return {
      dateFormat: (date) => {
        return moment(date).format('MM.DD.YYYY')
      },
      dateNotYear: (date) => {
        return moment(date).format('MM.DD')
      },
      dateOnlyYear: (date) => {
        return moment(date).format('YYYY')
      }
    }
  },
  props: ['shows']
}
</script>

<style lang="sass">
.mobile
  &__row
    div
      height: 55px
      padding-top: 5px
    display: flex
    flex-direction: row
    justify-content: space-between
    margin-bottom: 40px
    @media (min-width: 881px)
      // display: none
      justify-content: space-around
  &__row--block-one
    border-right: 2.5px solid black
    padding-right: 20px
    @media (max-width: 705px)
      padding-right: 10px
  &__date-month-and-day
    font-family: "Futura"
    font-size: 24px
    padding: 0
    margin: 0
  &__date-year
    font-family: "Futura"
    font-size: 14px
    font-weight: bold
    padding: 0
    margin: 0
    letter-spacing: 5px
    position: relative
    left: 3px
  &__row--block-two
    width: 150px
    margin-left: 18px
    @media (max-width: 705px)
      margin-left: 10px
  &__venue
    font-family: "Futura"
    font-size: 12px
    text-transform: uppercase
    letter-spacing: 1px
    font-weight: 100 !important
    position: relative
    top: 12px
    margin: 0
  &__city
    font-family: "Futura"
    font-size: 14px
    text-transform: uppercase
    letter-spacing: 2px
    font-weight: bold !important
    margin-bottom: 0
    position: relative
    top: 3px
  &__row--block-three
    z-index: 5
    padding: 5px
    a
      display: block
  &__ticket-button,
  &__rsvp-button,
  &__sold-out
    position: relative
    text-transform: uppercase
    &:hover
      cursor: pointer
      color: #d4af37
  &__rsvp-button
    text-align: right
    font-size: 16px
    letter-spacing: 5px
    border-bottom: 1px solid black
    padding-bottom: 6px
    text-align: center !important
    top: 6px !important
    color: black
    text-decoration: none
  &__ticket-button
    font-family: "Futura"
    font-size: 12px
    letter-spacing: 2px
    color: black
    text-decoration: none
    top: 10px !important
  &__sold-out
    font-family: "Futura"
    font-size: 12px
    letter-spacing: 2px
    color: red
    text-decoration: line-through
    top: 10px !important
    &:hover
      cursor: pointer
      color: red

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
    @media (max-width: 880px)
      display: none

    p
      display: inline-block
      margin: 0
      font-family: 'Futura'
      font-size: 12px
      font-weight: bold
      white-space: nowrap
      width: 125px
      padding-top: 7px
      text-transform: uppercase
      @media (max-width: 1000px)
        font-size: 10px

  &__date
    width: 75px !important
  &__city
    width: 100px !important
    @media (max-width: 1000px)
      width: 85px !important
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
    @media (max-width: 1000px)
      font-size: 10px
    &:hover
      color: white
      background-color: black
      cursor: pointer
  &__ticket-button
    width: 75px
    @media (max-width: 1000px)
      width: 60px
  &__rsvp-button
    width: 35px
    z-index: 5
  &__sold-out
    color: red
    text-decoration: none
    font-family: 'Futura'
    width: 75px
    text-decoration: line-through
    text-align: center
    padding: 5px
    letter-spacing: 1px
    font-size: 12px
    font-weight: bold
    @media (max-width: 1000px)
      width: 60px
      font-size: 10px

</style>
