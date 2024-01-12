import { IInput } from '../../interfaces'
import { Text } from '../../components'

export default function Email({ label, name, onChange, value }: IInput) {
    const handleChange = ({ currentTarget }: React.FormEvent<HTMLInputElement>) => {
        const { name, value } = currentTarget

        onChange({ name, value })
    }

    return (
        <label htmlFor={name}>
            <Text>{label}</Text>
                
            <input 
                name={name}
                defaultValue={String(value)}
                id={name}
                onChange={handleChange} 
                type='email' 
            />
        </label>
    )
}