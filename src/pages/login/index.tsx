import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Cookies from 'js-cookie'

import { Text, Form } from '../../components'
import { IFields, IFormOptions, ILogin } from '../../interfaces'
import { login } from '../../api'

export default function LoginPage() {
    const [error, setError] = useState<null | string>(null)

    const history = useHistory()

    const fields: Array<IFields>= [
        {
            label: 'Usuário',
            name: 'username',
            type: 'text',
            value: ''
        },
        {
            label: 'Senha',
            name: 'password',
            type: 'password',
            value: ''
        }
    ]

    const options: IFormOptions = {
        buttons: {
            show: {
                submit: true
            },
            size: {
                submit: 'md'
            },
            placement: 'full'
        }
    }

    const handleLogin = async ({ password, username }: ILogin) => {
        const data = await login({ password, username })

        if (typeof data == 'string') {
            setError(data)
        } else {
            history.push('/')
            localStorage.setItem('login', JSON.stringify(data))
            Cookies.set('jwt', data.token)
        } 
    }

    return (
        <div className='w-screen h-screen grid place-items-center bg-login-bg bg-cover'>
            <div className='backdrop-blur-md flex flex-col justify-start items-center gap-4 w-1/3 p-4'>
                <Text size='title' bold>Login</Text>

                <Form
                    fields={fields}
                    onSubmit={handleLogin}
                    options={options}
                    error={error}
                />
            </div>
        </div>
    )
}