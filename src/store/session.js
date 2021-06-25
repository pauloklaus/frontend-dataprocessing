/* eslint-disable */

export default {
    namespaced: true,
    state: {
        username: ""
    },
    mutations: {
        setUsername(state, username) {
            state.username = username
        }
    },
    actions: {
        setUsername(context, user) {
            context.commit("setUsername", user);
        }
    },
    getters: {
        getUser(state) {
            return state.username;
        }
    }
}
