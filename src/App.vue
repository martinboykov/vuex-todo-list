<template>
  <div id="app">
    <Header></Header>
    <router-view/>
  </div>
</template>
<script lang="ts">
import { mapActions } from "vuex";
import Header from "./components/layout/Header.vue";

export default {
  name: "App",
  components: {
    Header
  },
  methods: {
    ...mapActions(["getTodos"]),
  },
  created() {
    this.getTodos();
    console.log("Home created");
  },
  mounted() {
    console.log("Home mounted");
  },
  updated() {
    console.log("Home updated");
  },
  destroyed() {
    console.log("Home destroyed");
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
