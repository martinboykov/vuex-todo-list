<template>
  <div class="container">
    <form @submit="onSubmit">
      <input type="text" v-model="title" name="title" placeholder="Add Todo..." />
      <input type="submit" value="Submit" class="btn" />
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "AddTodo",
  data() {
    return {
      title: ""
    };
  },
  // computed: {
  //   ...mapGetters(["addTodo"])
  // },
  methods: {
    ...mapActions(["addTodo"]),
    onSubmit(e) {
      e.preventDefault();
      this.addTodo(this.title);
      this.title = "";
    }
  }
};
</script>

<style scoped lang="scss">
.container {
  padding: 20px 0;
}

form {
  max-width: 700px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  padding: 0 20px;
}
input {
  outline: none;
}
input[type="text"] {
  padding: 5px;
  height: 40px;
  border-radius: 0;
  border: 1px solid #000;
  flex: 10;
  &:focus {
    box-shadow: 0px 0px 12px -3px rgba(0, 0, 0, 0.3);
  }
}

input[type="submit"] {
  color: #fff;
  background-color: #000;
  flex: 3;
  &:hover {
    color: #fff;
    background-color: #000;
    opacity: 0.8;
  }
}
</style>
