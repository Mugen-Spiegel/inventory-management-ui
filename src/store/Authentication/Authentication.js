
export default  {
    state: {
        token: false
    },
    getters: {
        get_token: (state) => {
            return state.token
        }
    },
    mutations: {
        mutate_token(state, token) {
            state.token = token
        }
    },
    actions: {
        mutate_token ({ commit }, token) {
          commit('mutate_token', token)
        }
      }
}




