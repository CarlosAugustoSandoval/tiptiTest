import type IUser from '@/modules/users/models/IUser'

export default interface IAuthState {
  access_token?: string,
  expires_at?: string,
  token_type?: string,
  user?: IUser | null
}
