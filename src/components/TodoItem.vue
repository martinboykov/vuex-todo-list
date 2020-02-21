<template>
  <div class="todo-item">
    <div class="checkbox-group">
      <label class="checkbox privacy-label" v-bind:class="{'is-complete': todo.completed}">
        {{todo.title}}
        <input
          type="checkbox"
          v-on:change="updateTodoAction(todo)"
          :checked="todo.completed"
        />
        <span class="checkmark"></span>
      </label>
      <button v-on:click="delTodoAction(todo)" class="del">&times;</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "TodoItem",
  props: ["todo"],
  methods: {
    ...mapActions(["updateTodo", "delTodo"]),
    delTodoAction: function(todo) {
      this.delTodo(todo);
    },
    updateTodoAction: function(todo) {
      this.updateTodo({
        id: todo.id,
        title: todo.title,
        completed: !todo.completed
      });
    }
  }
};
</script>

<style scoped lang="scss">
.del {
  font-size: 20px;
  background-color: #ff0000;
  color: #fff;
  border: none;
  padding: 2px 9px;
  border-radius: 50%;
  cursor: pointer;
  float: right;
  outline: none;
}

.is-complete {
  text-decoration: line-through;
}
.todo-item {
  background-color: #f4f4f4;
  padding: 10px;
  border-bottom: 1px #ccc dotted;
}
.todo-item::after {
  content: "";
  clear: both;
  display: table;
}
.checkbox-group {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  a {
    text-decoration: underline;
  }
  input {
    display: none;
  }

  label.checkbox {
    font-size: 20px;
    color: #303030;
    padding: 0 20px 0 35px;
    position: relative;
    display: block;
    cursor: pointer;
    user-select: none;
    text-align: left;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    .checkmark {
      position: absolute;
      top: 50%;
      left: 0;
      height: 20px;
      width: 20px;
      transform: translateY(-50%);
      border: 2px solid #303030;
      &:after {
        display: none;
        content: "";
        position: absolute;
        left: 5px;
        top: 1px;
        width: 4px;
        height: 8px;
        border: solid #303030;
        border-width: 0 3px 3px 0;
        transform: rotate(45deg);
      }
    }
    input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
      height: 0;
      width: 0;
      &:checked ~ .checkmark:after {
        display: block;
      }
    }
  }
}
</style>
