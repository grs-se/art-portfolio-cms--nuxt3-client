import axios from 'axios'

import type { User } from '../components/User/types'
import ApiUrls from '@/data/constants/urls'

const getUsers = async () => {
  const baseUrl = import.meta.env.VITE_API_URL
  const endpoint = ApiUrls.getUsersEndpoint
  const url = `${baseUrl}${endpoint}`
  const response = await axios.get<User[]>(url)
  return response.data.data.users
}

export default getUsers
