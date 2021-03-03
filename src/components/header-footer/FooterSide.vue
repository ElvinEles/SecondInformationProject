<template>
  <v-footer padless dark>
    <v-container grid-list-xs>
      <v-row class="d-flex justify-center align-center">
        <v-col cols="12">
          <v-list>
            <v-list-item>
              <v-list-item-content
                class="nav-link-footer-content"
                v-for="category in getAllCategories"
                :key="category.category_id"
              >
                <router-link
                  :to="{
                    path: `/allinformation/${category.category_name}/${category.category_id}/`,
                  }"
                  class="nav-link-footer"
                >
                  {{ category.category_name }}
                </router-link>
              </v-list-item-content>
              <v-list-item-content class="nav-link-footer-carousel">
                <v-carousel
                  :show-arrows="false"
                  height="20"
                  cycle
                  hide-delimiters
                  interval="2000"
                >
                  <v-carousel-item
                    v-for="category in getAllCategories"
                    :key="category.category_id"
                  >
                    <div
                      class="display-5 d-flex justify-center align-center bottom_carousel"
                    >
                      <router-link
                        :to="{
                          path: `/allinformation/${category.category_name}/${category.category_id}/`,
                        }"
                      >
                        {{ category.category_name }}
                      </router-link>
                    </div>
                  </v-carousel-item>
                </v-carousel>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" class="d-flex justify-center align-center px-2">
          <div>
            <p class="about_author_head">Yazar Hakkında</p>
            <p class="about_author">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              voluptatem ducimus magnam nulla nihil non quam enim molestias aut
              mollitia exercitationem, dolor dignissimos consequatur accusamus?
              Quae sed itaque, fugit placeat magni cupiditate perferendis
              quaerat, maxime deserunt vel iure hic veritatis soluta. Voluptas a
              error laborum dolorum voluptatem veritatis ipsam adipisci amet
              optio magni aliquam mollitia tempore recusandae similique ullam
              magnam neque iure ad accusamus consequuntur accusantium debitis
              dolore, ducimus ut! Error, porro. Adipisci, maxime est vitae
              molestiae perferendis eos. Nulla, veniam. Ad quo illo sequi
              aliquid aut necessitatibus, possimus obcaecati impedit labore,
              dolores, temporibus tenetur molestias officiis dolore quisquam
              ipsam!
            </p>
          </div>
        </v-col>
      </v-row>
    </v-container>

    <a @click="scrollTop" class="back_to_top">
      <v-icon color="white" size="50">mdi-arrow-up-drop-circle</v-icon>
    </a>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      colors: [
        "indigo",
        "warning",
        "pink darken-2",
        "red lighten-1",
        "deep-purple accent-4",
      ],
      slides: ["First", "Second", "Third", "Fourth", "Fifth"],
    };
  },
  computed: {
    getAllCategories() {
      return this.$store.state.category.categories;
    },
  },

  methods: {
    scrollTop: function () {
      this.intervalId = setInterval(() => {
        if (window.pageYOffset === 0) {
          clearInterval(this.intervalId);
        }
        window.scroll(0, window.pageYOffset - 50);
      }, 20);
    },
    scrollListener: function () {
      this.visible = window.scrollY > 150;
    },
  },
  mounted: function () {
    window.addEventListener("scroll", this.scrollListener);
  },
  beforeDestroy: function () {
    window.removeEventListener("scroll", this.scrollListener);
  },
};
</script>

<style scoped>
.nav-link-footer {
  font-family: "Montserrat", sans-serif;
  color: white;
  font-size: 0.8rem;
  text-decoration: none;
  text-align: center;
  font-weight: 600;
  border-bottom-width: 2px;
  border-bottom-style: solid;
  line-height: 1.5rem;
  padding-top: 10px;
  padding-bottom: 10px;
  border-bottom-color: transparent;
}

.bottom_carousel {
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 0.9rem;
}

.nav-link-footer:hover,
.nav-lin-footer:focus {
  border-bottom-color: #da1212;
  opacity: 1;
  transition: 0.8s;
}

.about_author {
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 0.8rem;
  margin-left: 2%;
  margin-right: 2%;
}
.author_photo {
  width: 130px;
  height: 130px;
  border-radius: 10px;
}

.about_author_head {
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 1.8rem;
  margin-left: 2%;
  margin-right: 2%;
}

.back_to_top {
  background-color: crimson;
  position: fixed;
  border-radius: 20%;
  width: 65px;
  height: 65px;
  right: 5%;
  bottom: 5%;
  z-index: 100;
  opacity: 0.8;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
}

@media screen and (max-width: 1015px) {
  .nav-link-footer-content {
    display: none;
  }
}

@media screen and (min-width: 1015px) {
  .nav-link-footer-carousel {
    display: none;
  }
}

@media screen and (min-width: 1015px) and (max-width: 1260px) {
  .nav-link-footer {
    font-size: 0.6rem;
  }
}
</style>