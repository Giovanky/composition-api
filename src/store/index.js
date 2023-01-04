import { createStore } from 'vuex'

export default createStore({
  state: {
    todos: [
      {id: '1', text: 'Recolectar las piedras del infinito', completed: false},
      {id: '2', text: 'Conseguir secuases', completed: true},
      {id: '3', text: 'Piedras del poder', completed: true},
      {id: '4', text: 'Piedra del alma', completed: true},
    ]
  },
  getters: {
    pendingTodos(state, getters, rootState) {
      return state.todos.filter(t => !t.completed)
    },
    allTodos(state, getters, rootState) {
      return state.todos
    },
    completedTodos(state, getters, rootState) {
      return state.todos.filter(t => t.completed)
    },
    getTodosByTab: (_, getters) => (tab) => {
      switch(tab) {
        case 'all': return getters.allTodos
        case 'completed': return getters.completedTodos
        case 'pending': return getters.pendingTodos

        default: 
          break;
      }

    }
  },
  mutations: {
    toggleTodo(state, id) {
      const todoIndex = state.todos.findIndex(todo => todo.id === id)
      state.todos[todoIndex].completed = !state.todos[todoIndex].completed
    }
  },
  actions: {
  },
  modules: {
  }
})
