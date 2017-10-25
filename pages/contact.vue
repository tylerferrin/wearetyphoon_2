<template>
    <div class="about__container">
      <p><span>General Band Contact - </span> {{ $store.state.contacts[0]['bandContact']}}</p>
      <p><span>Management</span> | Dalton Sim - {{ $store.state.contacts[0]['management'][0]}}</p>
      <p><span>Management</span> | Mark Jourdian -  {{ $store.state.contacts[0]['management'][1]}}</p>
      <p><span>Booking</span> | North America - {{ $store.state.contacts[0]['bookingNorthAmerica']}}</p>
      <p><span>Booking</span> | Europe - {{ $store.state.contacts[0]['bandContact']}}</p>
      <p><span>Publicity</span> | North America - {{ $store.state.contacts[0]['publicityNorthAmerica']}}</p>
      <p><span>Publicity</span> | UK - {{ $store.state.contacts[0]['publicityUk']}}</p>
    </div>
</template>
<style lang="sass">
  .about__container
    padding-top: 7px
    p
      display: block
      margin: 0
      margin-bottom: 10px
      text-align: right
      font-family: 'Futura'
      font-size: 12px
      // font-weight: 100
      span
        font-weight: bold


</style>
