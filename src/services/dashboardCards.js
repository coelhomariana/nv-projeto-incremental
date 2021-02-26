import client from 'providers/fetchClient'

export const getAllCards = () => client.get('/cards')
