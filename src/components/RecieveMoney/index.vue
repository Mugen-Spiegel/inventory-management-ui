
<template>
  <v-card>
    <!-- <v-tabs
      v-model="tab"
      background-color="teal darken-3"
      dark
      color="basil"
      grow
    >
      <v-tabs-slider color="teal lighten-3"></v-tabs-slider>
      <v-tab
        v-for="(item, index) in category"
        :key="index"
      >
        {{ item }}
      </v-tab>
    </v-tabs> -->

    <!-- <v-tabs-items v-model="tab">
      <v-tab-item
        v-for="(item, index) in category"
        :key="index"
      >
      
        <v-card flat>
          
        </v-card>
      </v-tab-item>
    </v-tabs-items> -->
    <FormRecieve/>
    <TableRecieve/>
  </v-card>
</template>

<script>
import TableRecieve from './TableRecieve.vue'
import FormRecieve from './FormRecieve.vue'

  export default {
    components: {
        TableRecieve,
        FormRecieve
    },
    data () {
      return {
        category:{
            BackPack:"Back Pack",
            SlingBag: "Sling Bag",
            BeltBag: "Belt Bag",
            ShoulderBag: "Shoulder Bag",
            Jacket: "Jacket",
            Tshirt:"T-Shirt",
            
            
        },
        tab: null,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      }
    },
  }
</script>