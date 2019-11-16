<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list v-for="(item, index) in tab"  :key="index" dense>
          <v-list-group v-if="item.child"
                  prepend-icon="account_circle"
                  value="true"
                >
                  <template v-slot:activator>
                    <v-list-item-title>{{ item.text }}</v-list-item-title>
                  </template>

                    <v-list-item @click="getActiveTabs(item.text)"
                      v-for="(item, index) in item.child"
                      :key="index"
                      link
                    >
                      
                      <v-list-item-title>{{ item.text }}</v-list-item-title>
                      <!-- <v-list-item-icon>
                          <v-icon> {{ item.icon }} </v-icon>
                      </v-list-item-icon> -->
                    </v-list-item>
           </v-list-group>


          <v-list-item v-if="!item.child" @click="getActiveTabs(item)">
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                {{ item.text }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="indigo"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>{{activeTab.text}}</v-toolbar-title>
    </v-app-bar>

    <v-content v-if="activeTab.code =='home'">
        <Dashboard/>
    </v-content>
    <v-content v-if="activeTab.code =='RecieveMoney'">
        <RecieveMoney/>
    </v-content>
    <v-content v-if="activeTab.code =='SendMoney'">
        <SendMoney/>
    </v-content>
    <!-- <v-footer
      color="indigo"
      app
    >
      <span class="white--text">&copy; 2019</span>
    </v-footer> -->
  </v-app>
</template>

<script>
import { mapState } from 'vuex'


import RecieveMoney from './RecieveMoney/index.vue'
import SendMoney from './SendMoney/index.vue'
import Dashboard from './Dashboard/index.vue'

  export default {
    components: {
    RecieveMoney,
    SendMoney,
    Dashboard
    },
    computed: {
      ...mapState({
        activeTab: state => state.home.activeTab,
        tab: state => state.home.tab,
      })
    },
    props: {
      source: String,
    },

    data:function(){
      return {
        drawer: null,

        // active : this.$store.state.home.tab.active
      }
    },

    methods: {
        
      getActiveTabs(tab) {
        this.$store.dispatch('active_tab', tab, { root: true })
        return false
      },
    },
    created() {
    },
  }
</script>
