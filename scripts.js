const todosApp = {
  data() {
    return {
      items: [],
      newToDo: {
        done: false,
      },
    };
  },
  methods: {
    addItem: function () {
      if (this.newToDo.text) {
        this.items.push(this.newToDo);
        this.newToDo = {
          done: false,
        };
      } else {
        alert("To do item is required");
      }
    },
    clearAll() {
      this.items = [];
    },
  },
};

Vue.createApp(todosApp).mount("#app");
