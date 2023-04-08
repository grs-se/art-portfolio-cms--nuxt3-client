export function useArtworks() {
  var artworks = useState('artworks');

  const fetchArtworks = async () => {
    const { data, pending } = await useFetch(
      'http://127.0.0.1:8000/api/v1/artworks'
    );
    artworks.value = data.value;
  };

  return { artworks, fetchArtworks };
}
