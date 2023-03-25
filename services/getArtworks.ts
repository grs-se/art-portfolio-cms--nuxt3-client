import type { Artwork } from '@/types/IArtwork'
import ApiUrls from '@/data/constants/urls'

const getArtworks = async () => {
  const baseUrl = import.meta.env.VITE_API_URL
  const endpoint = ApiUrls.getAllArtworksEndpoint
  const url = `${baseUrl}${endpoint}`
  const response = await $fetch<Artwork[]>(url)
  return response.data.data.artworks
}

// const postArtworks = async () => {
// 	const url = `${baseUrl}/uploadArtworks`;
// 	const response = await axios.post<Artwork[]>(url);
// 	return response.data.data.artworks;
// };

export default getArtworks
