import { Mutation } from './resolvers/TodoResolvers'
import { TEST_DATA } from './data'

export async function reset() {
  await Mutation.deleteAll()
  await Mutation.createTodo({}, TEST_DATA)
}
