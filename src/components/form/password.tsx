import { useState } from 'react'
import { Eye, EyeSlash } from '@phosphor-icons/react'

import { IInput } from '../../interfaces'
import { Text } from '../../components'


export default function Password({ onChange, name, label, value }: IInput) {
    const [show, setShow] = useState<boolean>(false)

    const iconClass = 'cursor-pointer absolute right-1 top-2/4 -translate-y-2/4'

    const togglePassword = () => setShow(pass => !pass)

    const handleChange = ({ currentTarget }: React.FormEvent<HTMLInputElement>) => {
        const { name, value } = currentTarget

        onChange({ name, value })
    }

    return (
        <label htmlFor={name}>
            <Text>{label}</Text>
                <div className='relative'>
                    <input 
                        name={name}
                        defaultValue={String(value)}
                        id={name}
                        onChange={handleChange} 
                        type={show ? 'text' : 'password'} 
                    />
                    {
                        show
                        ? <Eye className={iconClass} onClick={togglePassword}/>
                        : <EyeSlash className={iconClass}  onClick={togglePassword}/>
                    }
                </div>
        </label>
    )
}