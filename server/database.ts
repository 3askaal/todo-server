import { connect, connection } from 'mongoose'
import { CONFIG } from './config'

export async function Connect() {
  await connect(`${CONFIG.MONGODB_URI}`, { useNewUrlParser: true })
}

export async function Disconnect() {
  await connection.close()
}
