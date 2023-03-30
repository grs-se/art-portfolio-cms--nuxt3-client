import HttpFactory from '../factory';
import { IText, IGetTextResponse } from 'types';

class TextModule extends HttpFactory {
  private RESOURCE = '/texts';

  async getTexts(): Promise<IGetTextResponse> {
    const res = await this.call<IGetTextResponse>('GET', this.RESOURCE);
    return res.data.data.texts;
  }

  async createText(text: IText): Promise<IGetTextResponse> {
    return await this.call('POST', `${this.RESOURCE}/createText`, text);
  }

  async createUploadText(texts: IText): Promise<IGetTextResponse> {
    return await this.call('POST', `${this.RESOURCE}/createUploadText`, texts);
  }
}

export default TextModule;
