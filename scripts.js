//testing
var todos = [
{
  text: 'Learn Vuejs',
  done: true
}
{
  text: 'Learn Vuejs',
  done: false
}
];

const todosApp= {
  data() {
    return {
      todos: window.todos,
      items: [],
      newToDo: { item: '' },
    };
  },
  methods: {
    addItem: function () {
      this.items.push(this.newToDo);
      this.newToDo = {};
    },
    clearAll: function () {
      this.items = [];
    },
  },
};

Vue.createApp(todosApp).mount("#app");
