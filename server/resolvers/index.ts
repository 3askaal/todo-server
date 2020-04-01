import * as path from 'path'
import { fileLoader } from 'merge-graphql-schemas'

const resolvers = fileLoader(
    path.join(__dirname, './'),
    { recursive: true }
)

export default resolvers
