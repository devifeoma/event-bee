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

  render: (h) => h(App),
}).$mount("#app");
