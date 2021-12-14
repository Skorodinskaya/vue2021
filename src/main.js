import App from "./App.vue";
import {createApp} from "vue";
import {createStore} from "vuex";
import {router} from "./router";

const store = createStore({
    state() {
        return {
            products: []
        }
    },
    mutations: {
        setProducts: (state, payload) => state.product = payload,
    },
   actions:{
        async getProducts({commit}){
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();

            commit('setProducts', data)
        }
   }
})

createApp(App)
    .use(router)
    .use(store)
    .mount('#app')
