import { IGetFormsField } from '../interfaces'

export default function getFormField({ fields, fieldName }: IGetFormsField) {
    return fields.find(({ name }) => name == fieldName)?.value
}