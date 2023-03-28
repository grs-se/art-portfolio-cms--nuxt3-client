import axios from 'axios'

import type { IUser } from '~/types/IUser'
import ApiUrls from '~/data/constants/urls'

const getUsers = async () => {
  const baseUrl = import.meta.env.API_BASE_URL
  const endpoint = ApiUrls.getUsersEndpoint
  const url = `${baseUrl}${endpoint}`
  const response = await axios.get<IUser[]>(url)
  return response.data.data.users
}

export default getUsers
