import { AxiosError } from 'axios'

import  { api } from '../base'
import { IFolder } from '../../interfaces'

export async function getFolder({ createdAt, id, key, username, owner, updatedAt }: IFolder) {
    try {
        const { data } = await api.get('/folders', { data:{ username, owner } })

        return await data
    } catch (e) {
        const error = e as AxiosError 

        return error?.response?.data
    }
}