import axios from 'axios'

import type { Artwork } from '../components/Artwork/types'
import ApiUrls from '@/data/constants/urls'

const getArtworks = async () => {
  const baseUrl = import.meta.env.VITE_API_URL
  const endpoint = ApiUrls.getAllArtworksEndpoint
  const url = `${baseUrl}${endpoint}`
  const response = await axios.get<Artwork[]>(url)
  return response.data.data.artworks
}

// const postArtworks = async () => {
// 	const url = `${baseUrl}/uploadArtworks`;
// 	const response = await axios.post<Artwork[]>(url);
// 	return response.data.data.artworks;
// };

export default getArtworks
