import { SyntheticEvent, useState } from 'react'

import { IForm, IFormState, ILogin } from '../../interfaces'
import { getFormField } from '../../helpers'

import { Text } from '..'
import FormButton from './button'
import Password from './password'
import TextInput from './text'
import Email from './email'

export default function Form({ fields, options, onSubmit, onCancel, error }: IForm) {
    const [form, setForm] = useState<ILogin>({
        username: String(getFormField({ fields, fieldName: 'username' })),
        password: String(getFormField({ fields, fieldName: 'password' }))    
    })

    const handleChange = ({ name, value }: IFormState) => {
        setForm(f => {
            return {
                ...f,
                [name]: value
            }
        })
    }

    const handleSubmit = (e: SyntheticEvent) => {
        e.preventDefault()
        
        onSubmit && onSubmit(form)
    }

    return (
        <form onSubmit={handleSubmit} className='w-full h-full realtive px-8 flex flex-col items-center gap-8'>
            {
                fields.map(({ label, name, type, value }) => {
                    switch(type) {
                        case 'password': return <Password key={name} value={value} label={label} name={name} onChange={handleChange} />
                        case 'text': return <TextInput key={name} value={value} label={label} name={name} onChange={handleChange} />
                        case 'email': return <Email key={name} value={value} label={label} name={name} onChange={handleChange} />
                        default: return <TextInput key={name} value={value} label={label} name={name} onChange={handleChange} />
                    }
                })
            }

            <div className='w-full mb-6'>
                <FormButton 
                    buttons={options?.buttons} 
                    onSubmit={() => onSubmit && onSubmit(form)}
                    onCancel={() => onCancel && onCancel()}
                />
            </div>

            <div className='absolute bottom-2 left-1/2 -translate-x-1/2'>
                { error && <Text error>{error}</Text>}
            </div>
        </form>
    )
}