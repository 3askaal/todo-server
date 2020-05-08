import { Col } from '../models'
import {
  TTodo,
  TMutationCreateTodoArgs,
  TMutationUpdateTodoArgs,
  TMutationDeleteTodoArgs,
} from '../types/todo.d'

export const Query: any = {
  Todos: async () => {
    const todos = await Col.find({})
    return todos
  },
}

export const Mutation = {
  createTodo: async (
    _: any,
    { data }: TMutationCreateTodoArgs,
  ): Promise<TTodo> => {
    return Col.create(data)
  },
  updateTodo: async (
    _: any,
    { _id, data }: TMutationUpdateTodoArgs,
  ): Promise<TTodo> => {
    return Col.findByIdAndUpdate(_id, data, { new: true })
  },
  deleteTodo: async (
    _: any,
    { _id }: TMutationDeleteTodoArgs,
  ): Promise<TTodo> => {
    return Col.findByIdAndRemove(_id)
  },
  checkAll: async (): Promise<boolean> => {
    return Col.updateMany({}, { completed: true })
  },
  uncheckAll: async (): Promise<boolean> => {
    return Col.updateMany({}, { completed: false })
  },
  deleteAll: async (): Promise<any> => {
    return Col.remove({})
  },
}
