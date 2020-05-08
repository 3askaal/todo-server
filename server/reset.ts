import { TODOS_DATA } from './data/todos'
import { Col } from './models'

export async function reset() {
  await Col.remove({})
  await Col.create(TODOS_DATA)
}
