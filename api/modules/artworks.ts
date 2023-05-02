import HttpFactory from '../factory';
import { IArtwork, IGetArtworkResponse } from 'types';

class ArtModule extends HttpFactory {
  private RESOURCE = '/artworks';

  async getArtworks(params?: string): Promise<IGetArtworkResponse> {
    const res = await this.call<IGetArtworkResponse>(
      'GET',
      `${this.RESOURCE}/${params}`
    );
    // console.log(this.RESOURCE + params);
    // console.log('res.data.artworks', res.data.artworks);
    return res.data.data.artworks;
  }

  async getArtworkByTitle(title: string): Promise<IGetArtworkResponse> {
    await this.call<IGetArtworkResponse>('GET', `${this.RESOURCE}/${title}`);
  }

  async createArtwork(artwork: IArtwork): Promise<IGetArtworkResponse> {
    return await this.call('POST', `${this.RESOURCE}/createArtwork`, artwork);
  }

  async createUploadArtwork(artworks: IArtwork): Promise<IGetArtworkResponse> {
    return await this.call(
      'POST',
      `${this.RESOURCE}/createUploadArtwork`,
      artworks
    );
  }

  // async getArtworksByCategory() {

  // },

  async sortByDate(params) {
    return await this.call('GET', `${this.RESOURCE}?sort=${params}`);
  }
}

export default ArtModule;
