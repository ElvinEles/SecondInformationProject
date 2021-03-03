<template>
  <nav id="nav">
    <button @click="shownavbar" class="navigation_button">
      <v-icon color="white" size="50">mdi-menu-open</v-icon>
    </button>
    <v-navigation-drawer
      hide-overlay
      :permanent="!$vuetify.breakpoint.xsOnly"
      v-model="drawer"
      color="primary"
      app
    >
      <v-row>
        <v-col cols="12" class="d-flex justify-center align-center">
          <router-link :to="{ path: '/' }">
            <v-avatar tile size="210">
              <img
                :src="require('@/assets/logo/logo.jpg')"
                class="mt-8 logo"
                alt=""
              />
            </v-avatar>
          </router-link>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12">
          <v-list>
            <v-divider></v-divider>
            <v-list-item class="main_nav_list">
              <router-link :to="{ path: '/' }" class="nav-link main_nav">
                Ana Sayfa
              </router-link>
            </v-list-item>

            <v-list-item
              v-for="category in getAllCategories"
              :key="category.category_id"
            >
              <router-link
                :to="{
                  path: `/allinformation/${category.category_name}/${category.category_id}/`,
                }"
                class="nav-link"
              >
                {{ category.category_name }}
              </router-link>
            </v-list-item>

            <v-divider></v-divider>
          </v-list>
        </v-col>
      </v-row>

      <div class="site_date">2021</div>
    </v-navigation-drawer>

    <transition name="fade_navbar">
      <div class="navbar" v-if="navbar">
        <ul class="navbar_ul">
          <li class="navbar_li main_navbar" @click="closenavbar">
            <router-link :to="{ path: '/' }" class="navbar_link">
              Ana Sayfa
            </router-link>
          </li>
          <li
            @click="closenavbar"
            class="navbar_li"
            v-for="category in getAllCategories"
            :key="category.category_id"
          >
            <router-link
              :to="{
                path: `/allinformation/${category.category_name}/${category.category_id}/`,
              }"
              class="navbar_link"
            >
              {{ category.category_name }}
            </router-link>
          </li>
          <li @click="closenavbar" class="navbar_li_date">
            <span>2021</span>
          </li>
        </ul>
      </div>
    </transition>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      navbar: false,
      drawer: true,
    };
  },
  computed: {
    getAllCategories() {
      return this.$store.state.category.categories;
    },
  },
  mounted() {
    this.$store.dispatch("getCategories");
  },
  methods: {
    shownavbar() {
      this.navbar = !this.navbar;
    },
    closenavbar() {
      this.navbar = false;
    },
  },
};
</script>

<style scoped>
.logo {
  object-fit: cover;
  border-radius: 10px;
  background-size: cover;
}

.v-list {
  background-color: #1e1e1e;
}

.v-list-item {
  padding-bottom: 5px;
  margin-top: 10px;
  border-radius: 10px;
  background-color: #1e1e1e;
}

.nav-link {
  font-family: "Montserrat", sans-serif;
  background-color: #1e1e1e;
  color: white;
  width: 100%;
  font-size: 1.1rem;
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

.nav-link:hover,
.nav-link:focus {
  border-bottom-color: #da1212;
  opacity: 1;
  transition: 0.8s;
}

.site_date {
  margin-top: 20px;
  padding: 3px;
  text-align: center;
  width: 100%;
  border-radius: 10px;
  font-weight: 700;
  font-family: "Montserrat", sans-serif;
  color: #1e1e1e;
  border-width: 2px;
  border-style: solid;
  border-color: #1e1e1e;
}

.main_nav {
  font-family: "Montserrat", sans-serif;
  background-color: crimson;
  color: white;
  width: 100%;
  font-size: 1.1rem;
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

.main_nav:hover,
.main_nav:focus {
  border-bottom-color: #1e1e1e;
  opacity: 1;
  transition: 0.8s;
}

.main_nav_list {
  background-color: crimson;
}

.navigation_button {
  background-color: #1e1e1e;
  position: fixed;
  border-radius: 20%;
  width: 65px;
  height: 65px;
  right: 5%;
  top: 5%;
  z-index: 100;
  opacity: 0.8;
  text-align: center;
}

.navbar {
  background-color: #1e1e1e;
  position: fixed;
  width: 80%;
  height: 500px;
  border-radius: 10%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 101;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.9;
}

.navbar_ul {
  list-style-type: none;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  padding: 3%;
}

.navbar_link {
  font-family: "Montserrat", sans-serif;
  color: white;
  width: 100%;
  font-size: 1.6rem;
  text-decoration: none;
  text-align: center;
  font-weight: 700;
  border-bottom-width: 2px;
  border-bottom-style: solid;
  line-height: 2rem;
  padding-top: 10px;
  padding-bottom: 10px;
  opacity: 0.9;
  border-bottom-color: transparent;
}

.navbar_li {
  width: 100%;
  background-color: #1e1e1e;
  border-bottom-width: 2px;
  border-bottom-style: solid;
  border-bottom-color: white;
  margin-bottom: 2%;
  margin-right: 2%;
  padding: 8px;
}

.navbar_li_date {
  font-family: "Montserrat", sans-serif;
  width: 100%;
  background-color: #1e1e1e;
  color: white;
  margin-top: 3%;
  margin-bottom: 10px;
  margin-right: 10px;
  padding: 2%;
  text-align: center;
  font-size: 2rem;
}

.main_navbar {
  width: 100%;
  background-color: crimson;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

@media screen and (min-width: 600px) {
  .navigation_button {
    display: none;
  }
}

.fade_navbar-enter-active,
.fade_navbar-leave-active {
  transition: opacity 0.3s ease-in-out;
}
.fade_navbar-enter, .fade_navbar-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.fade_navbar-enter-active {
  transition-delay: 0.3s;
}
</style>