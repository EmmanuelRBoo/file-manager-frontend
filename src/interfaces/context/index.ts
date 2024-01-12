import { IUser } from '..'

export default interface IContext {
    user?: IUser
    setUser?: (user: IUser) => void
}