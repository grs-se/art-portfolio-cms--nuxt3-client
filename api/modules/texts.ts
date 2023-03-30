import HttpFactory from '../factory';
import { IText, IGetTextResponse } from 'types';

class TextModule extends HttpFactory {
  private RESOURCE = '/text';

  async getTexts(): Promise<IGetTextResponse> {
    const res = await this.call<IGetTextResponse>('GET', this.RESOURCE);
    return res.data.data.texts;
  }

  async getArtistStatement(): Promise<IGetTextResponse> {
    const res = await this.call<IGetTextResponse>(
      'GET',
      `${this.RESOURCE}/artist-statement`
    );
    return res.data.data;
  }

  async createText(text: IText): Promise<IGetTextResponse> {
    return await this.call('POST', `${this.RESOURCE}/createText`, text);
  }

  async createUploadText(texts: IText): Promise<IGetTextResponse> {
    return await this.call('POST', `${this.RESOURCE}/createUploadText`, texts);
  }
}

export default TextModule;
