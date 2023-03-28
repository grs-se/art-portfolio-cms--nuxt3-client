import HttpFactory from '../factory'
import { IArtwork, IGetArtworkResponse } from 'types'

class ArtModule extends HttpFactory {
  private RESOURCE = '/artworks'

  async getArtworks(): Promise<IGetArtworkResponse> {
    const response = await this.call<IGetArtworkResponse>('GET', this.RESOURCE);
    console.log(response.data)
    return response.data;
  }
  
  async createArtwork(artwork: IArtwork): Promise<IGetArtworkResponse>{
    return await this.call('POST', `${this.RESOURCE}/createArtwork`, artwork )
  }
  
  async createUploadArtwork(artworks: IArtwork): Promise<IGetArtworkResponse>{
    return await this.call('POST', `${this.RESOURCE}/createUploadArtwork`, artworks )
  }
}

export default ArtModule
