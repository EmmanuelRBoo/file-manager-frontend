import { ILogin } from '..'

export interface IFields {
    label: string
    name: string
    value: string | boolean | number
    type: "text" | "password" | "email" | "checkbox"
}

export interface IFormOptions {
    inModal?: boolean
    onSubmit?: () => void
    onCancel?: () => void
    buttons?: {
        show?: {
            submit?: boolean
            cancel?: boolean
        }
        variant?: {
            submit?: "default" | "secondary" | "danger" | "success"
            cancel?: "default" | "secondary" | "danger" | "success"
        }
        text?: {
            submit?: string
            cancel?: string
        }
        size?: {
            submit?: "sm" | "md" | "lg"
            cancel?: "sm" | "md" | "lg"
        }
        placement?: "full" | "half" | "half-end" | "half-start" | "end" | "start"
        inverted?: boolean
    }
}


export interface IFormState {
    name: string
    value: string | boolean | number
}

export interface IInput {
    onChange: (data: IFormState) => void 
    name: string
    label: string
    value: string | boolean | number
}

export interface IForm {
    fields: Array<IFields>
    options?: IFormOptions
    error?: null | string
    onSubmit?: (data: ILogin) => void
    onCancel?: () => void
}
