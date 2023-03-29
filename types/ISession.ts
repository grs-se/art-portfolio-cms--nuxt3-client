import { IUser } from './models/IUser';

export interface ISession {
  authToken?: string;
  user?: IUser;
  userId?: number;
}
