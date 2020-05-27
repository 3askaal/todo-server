import { TODOS } from './data/todos'
import { Col } from './models'

export async function reset() {
  await Col.deleteMany({})

  const TodoPromises: Promise<any>[] = []

  TODOS.forEach(async (TODO: any) => {
    TodoPromises.push(Col.create(TODO))
  })

  await Promise.all(TodoPromises)
}
