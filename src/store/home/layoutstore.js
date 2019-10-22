
export default  {
    state: {
        tab: {
            Home: {
                icon:"mdi-home",
                text:"Home",
            },
            PointOfSale: {
                icon:"mdi-printer-pos",
                text:"Point of Sales"
            },
            Inventory: {
                icon:"mdi-table-large",
                text:"Inventory",
                child: {
                    Stocks: {
                        icon:"mdi-format-list-numbered",
                        text:"Stocks",
                    },
                    CriticalStocks: {
                        icon:"mdi-format-list-numbered",
                        text:"Critical Stocks",
                    },
                    ReplenishStocks: {
                        icon:"mdi-format-list-numbered",
                        text:"Replenish Stocks",
                    },
                }
            },
            SalesHistory: {
                icon:"mdi-table-large",
                text:"Sales History",
            },
            Contact: {
                icon:"mdi-contact-mail",
                text:"Contact"
            },
        },
        activeTab:"Home"
    },
    getters: {
        active: (state) => {
          return state.activeTab
        },
    },
    mutations: {
        active_tab(state, tab) {
            state.activeTab = tab
        }
    },
    actions: {
        active_tab ({ commit }, tab) {
          commit('active_tab', tab)
        }
      }
}




