import { Col } from '../models'
import { TMutationResolvers, TQueryResolvers } from '../types/todo.d'

export const Query: TQueryResolvers = {
  Todos: async () => {
    const todos = await Col.find({})
    return todos
  },
}

export const Mutation: TMutationResolvers = {
  createTodo: async (_, { data }) => {
    const todo = await Col.create(data)
    return todo
  },
  updateTodo: async (_, { _id, data }) => {
    const todo = await Col.findByIdAndUpdate(_id, data, { new: true })
    return todo
  },
  deleteTodo: async (_, { _id }) => {
    const todo = await Col.findByIdAndRemove(_id)
    return todo
  },
  checkAll: async () => {
    const res = await Col.updateMany({}, { completed: true })
    return res
  },
  uncheckAll: async () => {
    const res = await Col.updateMany({}, { completed: false })
    return res
  },
  deleteAll: async () => {
    const res = await Col.remove({})
    return !!res
  },
}
