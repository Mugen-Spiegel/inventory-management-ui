<template>
  <v-data-table
    :headers="headers"
    :items="desserts"
    :items-per-page="5"
    class="elevation-1"
  ></v-data-table>
</template>


<script>
  export default {
    data () {
      return {
        headers: [
          { text: 'Reference Number', value: 'reference_number' },
          { text: 'Origin Location', value: 'Origin_Location' },
          { text: 'Currency', value: 'currency' },
          { text: 'Sender', value: 'sender' },
          { text: 'Reciever', value: 'reciever' },
          { text: 'Date and Time', value: 'date_and_time' },
          { text: 'Amount', value: 'amount' },
        ],
        desserts: [
          {
            reference_number: 'ABSAXASA12141',
            Origin_Location: 'HAWAII, STORE ADDRESS, STORE CODE',
            currency: 'Dollar',
            sender: 'Jenny Ickles',
            reciever: 'Gerlene P. Castillo',
            date_and_time: '10-26-2019 HH:MM:SS',
            amount: 200
          },
        ],
      }
    },
  }
</script>