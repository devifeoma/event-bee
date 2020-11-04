import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "../src/assets/css/style.css";
import axios from "axios";

axios.defaults.baseURL =
  "https://flutterwave-api-endpoints.herokuapp.com/api/v1/auth/";

Vue.use(require("vue-moment"));

Vue.config.productionTip = false;

new Vue({
  router,
  store,

  created() {
    axios.interceptors.response.use(
      (response) => response, // simply return the response
      (error) => {
        if (error.response.status === 401) {
          // if we catch a 401 error
          this.$store.dispatch("logout"); // force a log out
        }
        return Promise.reject(error); // reject the Promise, with the error as the reason
      }
    );
  },

  render: (h) => h(App),
}).$mount("#app");
