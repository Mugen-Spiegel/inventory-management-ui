<template>
    <v-app>
      <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
        <Authenication v-if="!token"/>
        <LayOut v-if="token"/>
    </v-app>
</template>

<script>
import LayOut from './components/LayOut.vue'
import Authenication from './components/Authentication/AuthenticationComponent.vue'
import { mapState } from 'vuex'

export default {
  name: 'app',
  components: {
    LayOut,
    Authenication
  },
  computed: {
      ...mapState({
        token: state => state.authentication.token,
      })
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
