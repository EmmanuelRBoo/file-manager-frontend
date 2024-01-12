import { Text, Search } from '../../components' 
import { header } from './columns'
export default function HomePage() {
    

    return (
        <div className='flex flex-col items-center p-2'>
            <Search />

            <div className='mt-6 px-12 text-start w-full'>
                <Text size='title' bold>Home</Text>

                <table className='w-full border border-zinc-500'>
                    <thead className='border-b border-zinc-500'>
                        <tr>
                            {
                                header.map(({ id, text, size }) => <th className={` w- text-start ${size}`} key={id}>{text}</th>)
                            }
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>body1</th>
                            <th>body2</th>
                            <th>body3</th>
                            <th>body4</th>
                        </tr>
                        <tr>
                            <th>body1</th>
                            <th>body2</th>
                            <th>body3</th>
                            <th>body4</th>
                        </tr>
                        <tr>
                            <th>body1</th>
                            <th>body2</th>
                            <th>body3</th>
                            <th>body4</th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}