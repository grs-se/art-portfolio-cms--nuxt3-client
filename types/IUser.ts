export interface IUser {
  id?: number
  username: string
  name?: string
  loginType?: string
  password?: string
  confirmPassword?: string
  email?: string
  stripeCustomerId?: string | null
}
