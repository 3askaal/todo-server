import { ApolloServer } from 'apollo-server'
import typeDefs from './schema'
import resolvers from './resolvers'
import { Connect } from './database'
import './operations'

Connect()

const server = new ApolloServer({
  typeDefs,
  resolvers,
  cors: {
    origin: '*',
  },
  introspection: true,
})

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  // eslint-disable-next-line no-console
  console.log(`🚀 Server ready at ${url}`)
})
