import { IButton } from '../../interfaces'

export default function Button({ onClick, children, size, variant, type = 'button' }: IButton) {

    const getVariant = () => {
        switch(variant) {
            case 'default': return 'bg-zinc-400 hover:bg-zinc-500'
            case 'secondary': return 'bg-zinc-200 hover:bg-zinc-400'
            case 'danger': return 'bg-red-600 hover:bg-red-700'
            case 'success': return 'bg-green-600 hover:bg-green-700'
            default: return 'bg-zinc-400 hover:bg-zinc-500' 
        }
    }

    const getSize = () => {
        switch(size) {
            case 'sm': return 'px-2 text-sm'
            case 'md': return 'p-1'
            case 'lg': return 'py-2 px-4 text-xl'
            default: return 'py-1 px-2'
        }
    }

    return (
        <button
            type={type}
            onClick={onClick}
            className={`${getVariant()} ${getSize()} rounded-sm transition-all`}
        >
            {children}
        </button>
    )
}