import { TODOS } from './data/todos'
import { Col } from './models'

export async function reset() {
  await Col.remove({})
  
  TODOS.forEach(async (TODO: any) => {
    await Col.create(TODO)  
  })
}
