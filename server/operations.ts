import * as cron from 'node-cron'
import { reset } from './reset'

cron.schedule('*/5 * * * *', async () => {
  await reset()
})

reset()
