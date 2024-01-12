import { useState, createContext } from 'react'

import { IContext, ILayout, IUser } from '../interfaces'

export const Context = createContext<IContext>({})

export function Provider({ children }: ILayout) {
    const login: string | null = window.localStorage.getItem('login') ? window.localStorage.getItem('login') : null

    const [user, setUser] = useState<IUser>(JSON.parse(String(login)))

    const value: IContext = {
        user, 
        setUser
    }

    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    )
}