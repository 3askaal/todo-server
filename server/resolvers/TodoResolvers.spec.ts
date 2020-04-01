import {
  loadQueryFromClient,
  loadMutationFromClient,
  fakeRequest,
} from '../../test/helpers'
import { Connect, Disconnect } from '../database'
import { reset } from '../reset'

beforeEach(async () => {
  await Connect()
  await reset()
})

afterAll(async () => {
  await Disconnect()
})

describe('Queries', () => {
  it('Todos', async () => {
    const query = loadQueryFromClient('TodosQuery.gql')
    const res = await fakeRequest(query)
    expect(res.data.Todos).toBeDefined()
  })
})

describe('Mutations', () => {
  it('createTodo', async () => {
    const mutation = loadMutationFromClient('CreateMutation.gql')
    const variables: any = {
      data: {
        content: 'new todo',
      },
    }

    const res = await fakeRequest(mutation, variables)
    expect(res.data.createTodo).toBeDefined()
  })

  it('updateTodo', async () => {
    const query = loadQueryFromClient('TodosQuery.gql')
    const queryRes = await fakeRequest(query)
    const todoToUpdate = queryRes.data.Todos[0]

    const mutation = loadMutationFromClient('UpdateMutation.gql')
    const variables: any = {
      _id: todoToUpdate._id,
      data: {
        completed: true,
      },
    }

    const res = await fakeRequest(mutation, variables)
    expect(res.data.updateTodo).toBeDefined()
    expect(res.data.updateTodo.completed).toBe(true)
  })

  it('deleteTodo', async () => {
    const query = loadQueryFromClient('TodosQuery.gql')
    const queryRes = await fakeRequest(query)
    const todoToDelete = queryRes.data.Todos[0]

    const mutation = loadMutationFromClient('DeleteMutation.gql')
    const variables: any = {
      _id: todoToDelete._id,
    }

    const res = await fakeRequest(mutation, variables)
    expect(res.data.deleteTodo).toEqual({ _id: todoToDelete._id })
  })

  it('checkAll', async () => {
    const mutation = loadMutationFromClient('CheckAllMutation.gql')
    const res = await fakeRequest(mutation)
    expect(res.data.checkAll).toBe(null)
  })

  it('uncheckAll', async () => {
    const mutation = loadMutationFromClient('UncheckAllMutation.gql')
    const res = await fakeRequest(mutation)
    expect(res.data.uncheckAll).toBe(null)
  })

  it('deleteAll', async () => {
    const mutation = loadMutationFromClient('DeleteAllMutation.gql')
    const res = await fakeRequest(mutation)
    expect(res.data.deleteAll).toBe(null)
  })
})
