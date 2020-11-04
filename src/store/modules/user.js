import axios from "axios";

export default {
  state: {
    user: null,
  },
  mutations: {
    SET_USER_DATA(state, userData) {
      state.user = userData;
      localStorage.setItem("user", JSON.stringify(userData));
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${userData.token}`;
    },
  },
  actions: {
    signup({ commit }, payload) {
      //   let that = "signup";

      return axios
        .post(`signup`, payload, {
          header: {
            "Content-Type": "application/json",
          },
        })
        .then(({ data }) => {
          // console.log("user data is", data);
          commit("SET_USER_DATA", data);
        });
    },
    signin({ commit }, payload) {
      return axios
        .post(`signin`, payload, {
          header: {
            "Content-Type": "application/json",
          },
        })
        .then(({ data }) => {
          // console.log("user data is", data);
          commit("SET_USER_DATA", data);
        });
    },
  },
};
