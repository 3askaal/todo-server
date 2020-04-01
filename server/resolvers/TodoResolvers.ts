import { Col } from '../models'
import { TTodo } from '../types/todo.d'

export const Query = {
  Todos: async () => {
    const todos = await Col.find({})
    return todos
  },
}

export const Mutation = {
  createTodo: async (root: any, { data }: any): Promise<TTodo> => {
    const todo = await Col.create(data)
    return todo
  },
  updateTodo: async (root: any, { _id, data }: any): Promise<TTodo> => {
    const todo = await Col.findByIdAndUpdate(_id, data, { new: true })
    return todo
  },
  deleteTodo: async (root: any, { _id }: any): Promise<TTodo> => {
    const todo = await Col.findByIdAndRemove(_id)
    return todo
  },
  checkAll: async (): Promise<boolean> => {
    const res = await Col.updateMany({}, { completed: true })
    return res
  },
  uncheckAll: async (): Promise<boolean> => {
    const res = await Col.updateMany({}, { completed: false })
    return res
  },
  deleteAll: async (): Promise<any> => {
    const res = await Col.remove({})
    return res
  },
}
