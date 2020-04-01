import { Col } from "../models";

export const Query = {
  Todo: async ({ _id }: any) => {
    const todo = await Col.findById(_id);
    return todo;
  },
  Todos: async () => {
    const todos = await Col.find({});
    return todos;
  }
};

export const Mutation = {
  createTodo: async (root: any, { data }: any) => {
    try {
      const todo = await Col.create(data);
      return todo;
    } catch (err) {
      console.log(err);
    }
  },
  updateTodo: async (root: any, { _id, data }: any) => {
    try {
      const todo = await Col.findByIdAndUpdate(_id, data, { new: true });
      return todo;
    } catch (err) {
      console.log(err);
    }
  },
  deleteTodo: async (root: any, { _id }: any) => {
    try {
      const todo = await Col.findByIdAndRemove(_id);
      return todo;
    } catch (err) {
      console.log(err);
    }
  },
  checkAll: async (root: any) => {
    try {
      const res = await Col.updateMany({}, { completed: true });
      return res;
    } catch (err) {
      console.log(err);
    }
  },
  uncheckAll: async (root: any) => {
    try {
      const res = await Col.updateMany({}, { completed: false });
      return res;
    } catch (err) {
      console.log(err);
    }
  },
  deleteAll: async (root: any) => {
    try {
      const res = await Col.remove({});
      return res;
    } catch (err) {
      console.log(err);
    }
  }
};
