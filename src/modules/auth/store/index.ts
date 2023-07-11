import {defineStore} from 'pinia'
import type IAuthState from "@/modules/auth/models/IAuthState";
import {api} from "@/plugins/axios";
import type {AxiosResponse} from "axios";
import type IUser from "@/modules/users/models/IUser";
import type ILoginModel from "@/modules/auth/models/ILoginModel";
export const AuthStore = defineStore('AuthStore', {
    state: (): IAuthState => ({
        access_token: '',
        expires_at: '',
        token_type: '',
        user: null
    }),

    actions: {
        async login(user: ILoginModel) {
            return await new Promise(resolve => {
                api.get('users.json').then((response: AxiosResponse<IUser[]>) => {
                    this.user = response.data?.find((u) => u.email === user.email && u.password === user.password) || null
                    if(this.user) resolve(true)
                    else resolve('Wrong email or password')
                }).catch(() => {
                    resolve('server error when logging in')
                })
            })
        },
        async logOut () {
            return await new Promise(resolve => {
                this.user = null
                resolve(true)
            })
        },
    },
    persist: true
})
