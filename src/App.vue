<template>
  <div id="app">
    <!-- <transition name="slide-fade"> -->
      <!-- <index></index> -->
      <!-- <login></login> -->
      <!-- <register></register> -->
      <!-- <reset-password></reset-password> -->
      <router-view />
    <!-- </transition> -->
  </div>
</template>

<script>
// import index from "../src/components/index.vue";
// import login from "../src/components/auth/login.vue";
// import register from "../src/components/auth/register.vue";
// import resetPassword from "../src/components/auth/resetPassword.vue";
export default {
  components: {
    // index,
    // login
    // register,
    // resetPassword,
  },
  data() {
    return {};
  },
};
</script>

<style>
/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
