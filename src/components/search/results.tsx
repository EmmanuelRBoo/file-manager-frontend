export default function Results({ search }: { search: string}) {
    
    const teste = [
        {name: 'teste'},
        {name: 'teste'},
        {name: 'teste'},
        {name: 'teste'},
        {name: 'teste'},
        {name: 'teste'},
        {name: 'teste'},
        {name: 'teste'},
        {name: 'teste'},
        {name: 'teste'},
        {name: 'teste'},
        {name: 'teste'},
        {name: 'teste'},
        {name: 'teste'},
        {name: 'teste'},
        {name: 'teste'},
        {name: 'teste'},
        {name: 'teste'},
        {name: 'teste'},
        {name: 'teste'},
        {name: 'teste'},
        {name: 'teste'},
        {name: 'teste'},
        {name: 'teste'},
        {name: 'teste'},
        {name: 'teste'},
        {name: search},
    ]
    return (
        <div className='w-full max-h-52 overflow-auto h-auto border-zinc-400'>
            {
                teste.map(({ name }) => <p>{name}</p>)
            }
        </div>
    )
}