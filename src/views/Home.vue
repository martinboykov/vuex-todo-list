<template>
  <div id="app">
    <div class="main">
      <AddTodo ></AddTodo>
      <Todos v-bind:todos="allTodos"/>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import Todos from "../components/Todos.vue";
import AddTodo from "../components/AddTodo.vue";

export default {
  name: "Home",
  components: {
    Todos,
    AddTodo
  },
  computed: {
    ...mapGetters(["allTodos"])
  },

  methods: {
    // deleteTodo(todo) {
    //   axios
    //     .delete(
    //       `https://5e4ea1866272aa0014230dcf.mockapi.io/vue/todos/${todo.id}`
    //     )
    //     .then(() => {
    //       this.todos.splice(todo.index, 1);
    //     })
    //     .catch(err => console.log(err));
    // },
  },

  created() {
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
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.4;
}

.btn {
  display: inline-block;
  border: none;
  background-color: #555;
  color: #fff;
  padding: 0 20px;
  height: 40px;
  cursor: pointer;
}

.btn:hover {
  background-color: #666;
  color: #000;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.main {
  margin-top: 60px;
}
</style>
