const app = Vue.createApp({
  data() {
      return {
          doneTodo: false,
          todoInput: '',
          todos: [
            // {id: id++ , text: 'I want to eat', done: false},
            // {id: id++ , text: 'I want to rest', done: false},
            // {id: id++ , text: 'I want to dance', done: false},
            // {id: id++ , text: 'I want to rest', done: true}
          ]
      }
  },
 methods: {
   removeTodo(todo) {
    //  this.todos = this.todos.filter((x) => x !== todo)
    this.todos.splice(this.todos.indexOf(todo), 1)
   },
   //add new todos from the input field
   addTodo() {
     this.todos.push({ id: id++ , text: this.todoInput, done: false });
     this.todoInput = ''
   },
  //  to toggle the done todos
   doneToggle(todo) {
     todo.done = !todo.done
   }
 }
})

let id = 0;
