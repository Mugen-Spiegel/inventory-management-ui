
export default  {
    state: {
        tab: {
            Home: {
                icon:"mdi-home",
                text:"Home",
                code:"home"
            },
            SendMoney: {
                icon:"mdi-currency-usd",
                text:"Send Money",
                code:"SendMoney"
            },
            RecieveMoney: {
                icon:"mdi-printer-pos",
                text:"Receive money",
                code:"RecieveMoney"
            },
            // Inventory: {
            //     icon:"mdi-table-large",
            //     text:"Inventory",
            //     child: {
            //         Stocks: {
            //             icon:"mdi-format-list-numbered",
            //             text:"Stocks",
            //         },
            //         CriticalStocks: {
            //             icon:"mdi-format-list-numbered",
            //             text:"Critical Stocks",
            //         },
            //         ReplenishStocks: {
            //             icon:"mdi-format-list-numbered",
            //             text:"Replenish Stocks",
            //         },
            //     }
            // },
            SalesHistory: {
                icon:"mdi-table-large",
                text:"Sales History",
                code:"SalesHistory"
            },
            Contact: {
                icon:"mdi-contact-mail",
                text:"Contact",
                code:"Contact"
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




