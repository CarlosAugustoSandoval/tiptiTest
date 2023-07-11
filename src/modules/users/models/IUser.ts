import type IPermission from '@/modules/users/models/IPermission'

export default interface IUser {
    id: number | null
    name: string
    email: string
    password: string
    token: string
    permissions?: IPermission[]
}
