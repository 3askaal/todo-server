import path from 'path'
import { fileLoader } from 'merge-graphql-schemas'
import { makeExecutableSchema } from 'apollo-server'
import { graphql } from 'graphql'
import typeDefs from '../server/schema'
import resolvers from '../server/resolvers'

export const loadQueryFromClient = (queryFileName: string): string => {
  return fileLoader(
    path.join(__dirname, `../../todo-client/src/queries/${queryFileName}`),
  )[0]
}

export const loadMutationFromClient = (mutationFileName: string): string => {
  return fileLoader(
    path.join(__dirname, `../../todo-client/src/mutations/${mutationFileName}`),
  )[0]
}

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
})

export const fakeRequest = async (
  queryOrMutation: string,
  variables: object = {},
): Promise<any> => {
  const data: any = await graphql(
    schema,
    queryOrMutation,
    undefined,
    undefined,
    variables,
  )
  return data
}
