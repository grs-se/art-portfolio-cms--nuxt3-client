const config = useRuntimeConfig()
import type { IArtwork } from '~/types/IArtwork'
import ApiUrls from '~/data/constants/urls'

const getArtworks = async () => {
  const baseUrl = config.public.baseUrl + config.public.prefix
  const endpoint = ApiUrls.getAllArtworksEndpoint
  const url = `${baseUrl}${endpoint}`
  console.log(url)
  const response = await $fetch<IArtwork[]>(url)
  // console.log(response)
  return response.data.data.artworks
}

// const postArtworks = async () => {
// 	const url = `${baseUrl}/uploadArtworks`;
// 	const response = await axios.post<Artwork[]>(url);
// 	return response.data.data.artworks;
// };

export default getArtworks
