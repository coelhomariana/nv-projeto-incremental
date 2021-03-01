import client from 'providers/fetchClient'

export const getAllCards = async () => {
  const { data } = await client.get('/cards')
  return data
}
