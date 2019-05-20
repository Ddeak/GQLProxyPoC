import rp from "request-promise";

const mapElement = (element, id) => element && { id, ...element };

export default {
  todos: async () => {
    try {
      const todos = await rp("https://jsonplaceholder.typicode.com/todos");
      return JSON.parse(todos);
    } catch (err) {
      console.log("error!", err);
    }
  },
  todo: async ({ id }) => {
    const todo = await rp(`https://jsonplaceholder.typicode.com/todos/${id}`);
    return JSON.parse(todo);
  }
};
