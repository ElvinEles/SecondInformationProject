<template>
  <v-app>
    <asidenavbar />

    <v-main>
      <transition name="fade">
        <keep-alive>
          <router-view :key="$route.path"></router-view>
        </keep-alive>
      </transition>
    </v-main>
  </v-app>
</template>

<script>
import asidenavbar from "./components/header-footer/AsideNavbar";

export default {
  name: "App",

  components: {
    asidenavbar,
  },

  data: () => ({
    //
  }),
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-in-out;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.fade-enter-active {
  transition-delay: 0.3s;
}
</style>
