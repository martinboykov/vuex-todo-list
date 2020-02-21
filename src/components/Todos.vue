<template>
  <div class="container">
    <div v-bind:key="todo.id" v-for="(todo) in allTodos">
      <TodoItem v-bind:todo="todo"  />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import TodoItem from "./TodoItem.vue";

export default {
  name: "Todos",

  components: {
    TodoItem
  },
   computed: {
    ...mapGetters(["allTodos"])
  },
  props: ["todos"]
};
</script>

<style scoped>
.container {
  max-width: 1366px;
  width: 100%;
  margin: 0 auto;
}
</style>
