import {defineStore} from "pinia";

export const useStore = defineStore('counter', {
    state: () => ({
        account: {id:0},
    }),
    getters: {
        setAccount(state, payload) {
            state.account.id = payload
        },
        doubleCount: (state) => state.count * 2,
    },
    actions: {
        increment() {
            this.count++
        },
    },
})
