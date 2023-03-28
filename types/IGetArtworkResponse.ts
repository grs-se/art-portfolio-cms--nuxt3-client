import { IArtwork } from './IArtwork';
export interface IGetArtworkResponse {
  data: {
    artworks: { type: [IArtwork] };
  };
}
