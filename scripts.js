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
    addItem() {
      if (this.newToDo.text) {
        this.items.push(this.newToDo);
        this.newToDo = {
          done: false,
        };
        localStorage.setItem("items", JSON.stringify(this.items));
      } else {
        alert("To do item is required");
      }
    },
    clearAll() {
      this.items = [];
    },
  },
  created() {
    this.items = localStorage.getItem("items")
      ? JSON.parse(localStorage.getItem("items"))
      : this.items;
  },
  updated() {
    localStorage.setItem("items", JSON.stringify(this.items));
  },
};

Vue.createApp(todosApp).mount("#app");
