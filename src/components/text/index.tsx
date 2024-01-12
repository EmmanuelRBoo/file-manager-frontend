import { IText } from '../../interfaces'

export default function Text({ children, bold, italic, size, error }: IText) {
    const className = `
        ${bold ? 'font-semibold' : ''}
        ${italic ? 'italic' : ''}
        ${error ? 'text-rose-700' : 'text-zinc-900'}
    `

    switch(size) {
        case 'small': return <small className={`text-xs ${className}`}>{children}</small>
        case 'default': return <p className={`text-base ${className}`}>{children}</p>
        case 'subtitle': return <h2 className={`text-xl ${className}`}>{children}</h2>
        case 'title': return <h1 className={`text-4xl ${className}`}>{children}</h1>
        default: return <p className={`text-base ${className}`}>{children}</p>
    }
}