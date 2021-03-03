<template>
  <v-container grid-list-xs>
    <v-row class="d-flex justify-center align-center">
      <v-col cols="12">
        <h1 class="category_name">
          {{ this.$route.params.category_name }}
        </h1>
      </v-col>
    </v-row>

    <v-row class="d-flex justify-center align-center">
      <v-col cols="9" class="d-flex flex-wrap justify-center align-center">
        <template v-for="information in getInformationByCategory">
          <div
            :key="information.information_id"
            class="information d-flex flex-column justify-center align-start"
          >
            <div class="information_img">
              <img
                :src="require(`@/assets${information.information_image}`)"
                alt=""
              />
            </div>
            <div
              class="information_title"
              @click="click(information.information_id)"
            >
              <router-link
                :to="{ path: `/oneinformation/${information.information_id}` }"
                class="information_name_link"
              >
                {{ information.information_name.substr(0, 25) + "..." }}
              </router-link>
            </div>
          </div>
        </template>
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
    getInformationByCategory() {
      return this.$store.getters.getinformationbycategory(
        this.$route.params.id
      );
    },
  },

  mounted() {},

  methods: {
    click(information_id) {
      this.$store.dispatch("sendViewCount", information_id);
    },
  },
};
</script>

<style scoped>
.category_name {
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  width: 100%;
  text-align: center;
  font-size: 5rem;
  line-height: 5rem;
  border-bottom-width: 2px;
  border-bottom-style: solid;
  border-bottom-color: crimson;
}

.information {
  height: 220px;
  width: 220px;
  margin: 10px;
  padding-left: 5px;
  padding-right: 5px;
  border-radius: 5px;
  background-color: #1e1e1e;
  border-bottom-width: 2px;
  border-bottom-style: solid;
  border-bottom-color: transparent;
}

.information:hover {
  border-bottom-color: #da1212;
  box-shadow: 2px 2px 2px 2px #1e1e1e;
  z-index: 2;
  transition: 0.8s;
}

.information_title {
  text-align: center;
  width: 100%;
  display: flex;
  align-items: center;
  padding-top: 5px;
}

img {
  width: 100%;
  height: 150px;
  border-radius: 10px;
}

a.information_name_link {
  font-family: "Montserrat", sans-serif;
  text-decoration: none;
  font-size: 0.9rem;
  color: white;
  font-weight: 600;
  font-style: bold;
  text-align: center;
  line-height: 1.2rem;
  width: 100%;
}

@media screen and (max-width: 768px) {
  .category_name {
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    font-size: 2rem;
    line-height: 2rem;
  }
}
</style>