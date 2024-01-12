export default interface IText {
    children: React.ReactNode | React.ReactNode[] | string
    size?: "small" | "default" | "subtitle" | "title"
    bold?: boolean
    italic?: boolean
    error?: boolean
}