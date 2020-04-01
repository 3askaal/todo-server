import { ApolloServer } from 'apollo-server'
import typeDefs from './schema'
import resolvers from './resolvers'
import { Database } from './database';
import './reset';

Database()

const server = new ApolloServer({
  typeDefs,
  resolvers,
  cors: {
    origin: '*'
  },
  introspection: true
});

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
