<template>
  <v-container grid-list-xs>
    <v-row class="d-flex justify-center align-center">
      <v-col cols="10" class="d-flex justify-center align-center">
        <h1 class="information_custom_name" v-if="getInformation">
          {{ getInformation.information_name }}
        </h1>
      </v-col>

      <v-col cols="10" class="d-flex justify-center align-center">
        <p v-if="getInformation" v-html="getInformation.information_text"></p>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <v-footer>
          <footerside />
        </v-footer>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import footerside from "../header-footer/FooterSide";
export default {
  components: {
    footerside,
  },
  data() {
    return {};
  },

  computed: {
    getInformation() {
      if (this.$route.params.oneinformationid) {
        return this.$store.getters.getoneinformation(
          this.$route.params.oneinformationid
        );
      }
      return null;
    },
  },
  mounted() {
    // this.$store.dispatch("getAllInformation");
  },
};
</script>

<style scoped>
.information_custom_name {
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  width: 100%;
  text-align: center;
  font-size: 5rem;
  line-height: 5rem;
  border-bottom-width: 2px;
  border-bottom-style: solid;
  border-bottom-color: crimson;
  padding-bottom: 10px;
}

@media screen and (max-width: 768px) {
  .information_custom_name {
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    font-size: 2rem;
    line-height: 2rem;
  }
}
</style>