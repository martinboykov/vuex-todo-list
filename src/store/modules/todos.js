import axios from "axios";


const state = {
    todos: []
};

const getters = {
    allTodos: (state) => state.todos
};

// all async operations
const actions = {
    async getTodos({ commit }) {
        try {
            // first make async operation
            const res = await axios.get("https://5e4ea1866272aa0014230dcf.mockapi.io/vue/todos");
            // then perform sync operation
            commit("getTodosSync", res.data);

        } catch (error) {
            console.log(error);
        }
    },
    async addTodo({ commit }, title) {
        const newTodo = {
            title: title,
            completed: false
        };
        try {
            const res = await axios.post("https://5e4ea1866272aa0014230dcf.mockapi.io/vue/todos", newTodo);
            commit("addTodoSync", res.data);
        } catch (error) {
            console.log(error);
        }
    },
    async updateTodo({ commit }, todo) {
        const res = await axios.put(
            `https://5e4ea1866272aa0014230dcf.mockapi.io/vue/todos/${todo.id}`,
            todo
        );
        commit("updateTodoSync", res.data);
    },
    async delTodo({ commit }, todo) {
        const res = await axios.delete(`https://5e4ea1866272aa0014230dcf.mockapi.io/vue/todos/${todo.id}`);
        commit("delTodoSync", res.data);
    },
};

// only sync operations ()
const mutations = {
    getTodosSync: (state, todos) => (state.todos = todos),
    addTodoSync: (state, todo) => (state.todos.push(todo)),
    updateTodoSync: (state, todo) => (state.todos.forEach((t) => {
        if (t.id === todo.id) t.completed = todo.completed;
    })),
    delTodoSync: (state, todos) => (state.todos = state.todos.filter((todo) => todo.id !== todos.id)),
};

export default {
    state,
    getters,
    actions,
    mutations
};
