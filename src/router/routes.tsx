import { useContext } from 'react'
import { Route, Switch, useHistory } from 'react-router-dom'

import { LoginPage, HomePage } from '../pages'

import { Context } from '../context'

export default function Routes() {
    const { user } = useContext(Context)

    const { push } = useHistory()

    if (!user) {
        push('/login')
    } else {
        push('/')
    }

    return (
        <Switch >
            <Route exact path='/login' render={() => <LoginPage />} />
            <Route exact path='/' render={() => <HomePage />} />
        </Switch>
    )
}