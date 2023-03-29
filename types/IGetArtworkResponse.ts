import { IArtwork } from './models/IArtwork';
export interface IGetArtworkResponse {
  data: {
    artworks: { type: [IArtwork] };
  };
}
