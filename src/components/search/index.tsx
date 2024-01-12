import { useState, useRef, useEffect } from 'react'
import { MagnifyingGlass, X } from '@phosphor-icons/react'
import _ from 'lodash'

import Results from './results'

export default function Search() {
    const inputRef = useRef<HTMLInputElement>(null)

    const search: string = String(inputRef.current?.value || '')

    const [open, setOpen] = useState<boolean>(false)

    const handleSearch = () => {
        if (!open) {
            setOpen(true)
        }

        console.log('api')
    }

    const clearSearch = () => {
        if (inputRef.current) {
            inputRef.current.value = ''
        }
    }

    const handleBlur = () => setOpen(false)

    const handleFocus = () => {
        if (search.length > 0 && !open) {
            setOpen(true)
        }
    }

    useEffect(() => {
        console.log('input')
    },[inputRef.current?.value])

    return (
        <div className='border-zinc-400 relative shadow-md border w-2/5 h-10 rounded-sm'>
            <MagnifyingGlass 
                className='h-8 w-8 top-1/2 left-1 -translate-y-1/2 p-2 absolute'
            />
            
            <input 
                className='w-full h-full bg-transparent outline-none bg-gray-300 focus:bg-transparent transition-all pl-10 placeholder:text-zinc-600' 
                placeholder='Pesquisar'
                onBlur={handleBlur}
                onFocus={handleFocus}
                ref={inputRef}
                onChange={_.debounce(handleSearch, 300)}
            />

            {open && <Results search={search}/>}

            {
                search.length > 0 && (
                    <X 
                        onClick={clearSearch} 
                        className='h-8 w-8 cursor-pointer rounded-full hover:scale-110 hover:bg-gray-400 top-1/2 right-1 -translate-y-1/2 p-2 absolute'
                    />
                )
            }
        </div>
    )
}