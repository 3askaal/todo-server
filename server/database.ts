import { connect, Types } from 'mongoose'
import { CONFIG } from './config'

Types.ObjectId.prototype.valueOf = function () {
  return this.toString()
}

export async function Database () {
  await connect(
    `${CONFIG.MONGODB_URI}`,
    { useNewUrlParser: true }
  )
}
