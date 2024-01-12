export default interface IButton {
    onClick: () => void
    variant?: "default" | "secondary" | "danger" | "success"
    size?: "sm" | "md" | "lg"
    children: React.ReactNode | React.ReactNode[] | string
    type?: "submit" | "button"
}