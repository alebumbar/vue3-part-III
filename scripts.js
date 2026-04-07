const todosApp= {
  data() {
    return {
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
