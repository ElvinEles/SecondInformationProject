<template>
  <v-container grid-list-xs>
    <v-row class="d-flex justify-center align-center">
      <v-col cols="12">
        <v-carousel height="auto" hide-delimiters cycle interval="2000">
          <v-carousel-item v-for="(item, i) in sliders" :key="i">
            <v-img
              class="carousel_image"
              :src="require(`@/assets/slider/${item.name}.jpg`)"
            />
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>

    <v-row class="d-flex justify-center align-center">
      <v-col cols="9" class="d-flex flex-wrap justify-center align-center">
        <template v-for="information in getPaginateInformation">
          <div
            :key="information.information_id"
            class="information d-flex flex-column justify-center align-start"
          >
            <div class="information_img">
              <img
                :src="require(`@/assets${information.information_image}`)"
                alt="No Photo"
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
                {{ information.information_name.substr(0, 22) + "..." }}
              </router-link>
            </div>
          </div>
        </template>
      </v-col>

      <v-col cols="12">
        <div class="text-center mt-6 mb-6">
          <v-pagination
            color="warning"
            v-model="page"
            :length="getPaginateInformationlen"
            @input="PaginateNumber"
          ></v-pagination>
        </div>
      </v-col>
    </v-row>

    <v-row class="d-flex flex-column justify-center align-center">
      <v-col cols="12" class="d-flex flex-column justify-center align-center">
        <v-card class="tab_background" color="basil">
          <v-tabs
            v-model="tab"
            background-color="transparent"
            color="basil"
            grow
          >
            <v-tab class="tab_name" :key="1">
              <v-tooltip top>
                <template v-slot:activator="{ on }">
                  <v-icon v-on="on" class="tab_name_icon">
                    mdi-arrow-collapse-down
                  </v-icon>
                </template>
                <span>Lorem ipsum dolor sit amet.</span>
              </v-tooltip>
              <span class="tab_name_word">Lorem ipsum dolor sit amet.</span>
            </v-tab>

            <v-tab class="tab_name" :key="2">
              <v-tooltip top>
                <template v-slot:activator="{ on }">
                  <v-icon v-on="on" class="tab_name_icon">
                    mdi-arrow-collapse-up
                  </v-icon>
                </template>
                <span>Lorem ipsum dolor sit amet.</span>
              </v-tooltip>
              <span class="tab_name_word"> Lorem ipsum dolor sit amet. </span>
            </v-tab>
          </v-tabs>

          <v-tabs-items v-model="tab">
            <v-tab-item :key="1">
              <v-row>
                <v-col
                  cols="12"
                  class="d-flex flex-column justify-center align-center"
                >
                  <div
                    v-for="information in getLastinformations"
                    :key="information.information_id"
                    class="d-flex justify-start align-center line_background"
                  >
                    <router-link
                      :to="{
                        path: `/oneinformation/${information.information_id}`,
                      }"
                      class="recent_information_title"
                    >
                      {{ information.information_name }}
                    </router-link>
                  </div>
                </v-col>
              </v-row>
            </v-tab-item>
            <v-tab-item :key="2">
              <v-row>
                <v-col
                  cols="12"
                  class="d-flex flex-column justify-center align-center"
                >
                  <div
                    v-for="information in getPopularInformations"
                    :key="information.information_id"
                    class="d-flex justify-start align-center line_background"
                  >
                    <router-link
                      :to="{
                        path: `/oneinformation/${information.information_id}`,
                      }"
                      class="recent_information_title"
                    >
                      {{ information.information_name }}
                    </router-link>

                    <div
                      class="popular_views d-flex justify-start align-center"
                    >
                      <v-icon dense>mdi-eye</v-icon>
                      <span class="viewofcount">
                        {{ information.information_count }}
                      </span>
                    </div>
                  </div>
                </v-col>
              </v-row>
            </v-tab-item>
          </v-tabs-items>
        </v-card>
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
    return {
      page: 1,
      paginatelentgh: 0,
      sliders: [
        {
          id: 1,
          name: "lorem",
        },
        {
          id: 2,
          name: "lorem",
        },
        {
          id: 3,
          name: "lorem",
        },
      ],
      tab: null,
      items_t: ["lorem", "lorem"],
    };
  },

  computed: {
    getPaginateInformation() {
      return this.$store.state.information.paginateinformations;
    },
    getPaginateInformationlen() {
      return this.$store.state.information.paginatelastpage;
    },
    getLastinformations() {
      return this.$store.state.information.lastinformations;
    },
    getPopularInformations() {
      return this.$store.state.information.popularinformations;
    },
  },

  mounted() {
    this.$store.dispatch("popularinformations");
    this.$store.dispatch("lastinformations");
    this.$store.dispatch("getAllInformation");
    this.$store.dispatch("getPaginateInformations", this.page);
  },

  methods: {
    PaginateNumber() {
      this.$store.dispatch("getPaginateInformations", this.page);
    },
    click(information_id) {
      this.$store.dispatch("sendViewCount", information_id);
    },
  },
};
</script>

<style scoped>
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
  font-family: "Montserrat", sans-serif;
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

.v-tab.v-tab {
  font-family: "Montserrat", sans-serif;
  text-decoration: none;
  font-size: 1rem;
  color: #1e1e1e;
  font-weight: 600;
  font-style: bold;
  text-transform: uppercase;
  text-align: center;
  line-height: 1.2rem;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.9s ease-in-out;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.fade-enter-active {
  transition-delay: 2.5s;
}

.tab_background {
  width: 100%;
  height: 250px;
  margin-bottom: 30px;
}

.line_background {
  width: 100%;
  padding: 5px;
}

.recent_information_title {
  width: 100%;
  font-size: 1.4rem;
  font-family: "Montserrat", sans-serif;
  text-decoration: none;
  font-size: 1rem;
  color: #1e1e1e;
  font-weight: 600;
  font-style: bold;
  text-align: left;
  line-height: 1.2rem;
}

.viewofcount {
  font-family: "Montserrat", sans-serif;
  font-size: 1rem;
  margin-left: 3px;
}

.popular_views {
  margin: 0;
  padding: 0;
  width: 40px;
}

.carousel_image {
  height: 100%;
  object-fit: cover;
}

@media screen and (max-width: 768px) {
  .tab_name_word {
    display: none;
  }
}

@media screen and (min-width: 768px) {
  .tab_name_icon {
    display: none;
  }
}
</style>