<template>
  <h1>Lista de tareas</h1>
  <h4>Tareas pendientes: {{pending.length}}</h4>

  <hr>
  <h4>Todos: {{all.length}}</h4>
  <h4>Completados: {{completed.length}}</h4>   

  <button :class="{'active': currentTab === 'all'}"
    @click="currentTab= 'all'"
  >Todos</button>
  <button :class="{'active': currentTab === 'pending'}"
  @click="currentTab= 'pending'"
  >Pendientes</button>
  <button :class="{'active': currentTab === 'completed'}"
  @click="currentTab= 'completed'"
  >Completados</button>
  <div>
    <ul>
        <li v-for="todo in getTodosByTab" :key="todo.id"
        :class="{'completed': todo.completed}"
        @dblclick="toggleTodo(todo.id)">
            {{todo.text}}
        </li>
    </ul>
  </div>
</template>

<script>
import useTodos from '../composables/useTodos'

export default{
    setup(){
        const {currentTab, getTodosByTab, toggleTodo, pending, all, completed} = useTodos()

        return {
            currentTab,
            getTodosByTab, 
            toggleTodo,
            pending,
            all,
            completed
        }
    }
}
</script>

<style scoped>
div{
    display: flex;
    justify-content: center;
    text-align: center;
}

ul{
    width: 300px;
    text-align: center;
}

.active {
    background-color: #2c3e50;
    color: white;
}
.completed {
text-decoration: line-through;
}
</style>