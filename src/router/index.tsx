import { BrowserRouter } from 'react-router-dom'
import { Provider } from '../context'
import Routes from './routes'

export function AppRouter() { 
    return (
        <BrowserRouter basename='/'>
            <Provider>
                <div className='w-screen h-screen bg-zinc-100'>
                    <Routes />
                </div>
            </Provider>
        </BrowserRouter>
    )
}