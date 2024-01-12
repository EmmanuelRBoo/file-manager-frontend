export interface IHeaderColumn {
    id: number
    text: string
    size: string
    onSort?: () => void
}