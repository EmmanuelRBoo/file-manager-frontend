import { AxiosError } from 'axios'

import { api } from '../base'
import { ILogin } from '../../interfaces'

export async function login({ username, password }: ILogin) {
    try {
        const { data } = await api.post('/login', { username, password })

        return await data
    } catch (e) {
        const error = e as AxiosError 

        return error?.response?.data
    }
}