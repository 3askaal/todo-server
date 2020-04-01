import { Mutation } from './resolvers/TodoResolvers'
import { TODOS_DATA } from './data/todos'

export async function reset() {
  await Mutation.deleteAll()
  await Mutation.createTodo({}, TODOS_DATA)
}
