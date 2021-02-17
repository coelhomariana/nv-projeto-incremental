import client from 'providers/fetchClient'

export const getUser = () => client.get('/v1/me')

export const login = data => client.post('/v1/users/login', data)

export const mockLogin = async ({ username, password }) => {
  try {
    const { data } = await client.get('/auth')
    const foundUser = data.find(e => e.username === username && e.password === password)

    if (foundUser) {
      return foundUser
    }
    throw new Error()
  } catch (err) {
    console.log(err)
  }
}
