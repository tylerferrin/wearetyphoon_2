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
        <template v-for="(support, index) in show.support">
          <p class="mobile__support" v-if=" index == 0 "> w / {{ support }}</p>
          <p class="mobile__support firstOf" v-if=" index != 0 "> + {{ support }}</p>
        </template>
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
      justify-content: space-around
  &__row--block-one
    border-right: 2.5px solid black
    padding-right: 20px
    padding-top: 0 !important
    @media (max-width: 705px)
      padding-right: 10px
  &__date-month-and-day
    font-family: "Futura"
    font-size: 24px
    padding: 0
    margin: 0
    padding-left: 3px
  &__date-year
    font-family: "Futura"
    font-size: 16px
    font-weight: bold
    padding: 0
    margin: 0
    letter-spacing: 6px
    position: relative
    left: 3px
  &__row--block-two
    width: 150px
    margin-left: 0px
    @media (max-width: 705px)
      margin-left: 0px
  &__venue
    font-family: "Futura"
    font-size: 12px
    text-transform: uppercase
    letter-spacing: 1px
    font-weight: 100 !important
    position: relative
    top: -1px
    margin: 0
    width: 200px !important
  &__city
    font-family: "Futura"
    font-size: 12px
    text-transform: uppercase
    letter-spacing: 2px
    font-weight: bold !important
    margin-top: 5px
    margin-bottom: 5px
    position: relative
    top: 0px
    width: 200px !important
  &__support
    position: relative
    font-family: "Futura"
    font-size: 8px
    text-transform: uppercase
    letter-spacing: 1px
    margin: 0
    display: block
    margin-bottom: 5px
  &__support.firstOf
    padding-left: 13px
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

</style>
