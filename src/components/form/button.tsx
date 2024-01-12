import { IFormOptions } from '../../interfaces'
import Button from '../button'

export default function FormButton({ buttons, onCancel, onSubmit }: IFormOptions) {
    if (buttons) {

        const getPlacement = () => {
            switch(buttons.placement) {
                case 'end': return 'justify-end'
                case 'start': return 'justify-start'
                case 'full': return '*:w-full'
                case 'half': return '*:w-1/2 justify-center'
                case 'half-end': return '*:w-1/2 justify-end'
                case 'half-start': return '*:w-1/2 justify-start'
                default: return 'justify-end'
            }
        }

        return (
            <div className={`${getPlacement()} flex`}>
                {
                    buttons?.show?.cancel && (
                        <Button 
                            variant={buttons?.variant?.cancel} 
                            onClick={() => onCancel && onCancel()}
                            size={buttons?.size?.cancel}
                        >
                            {buttons?.text?.cancel || 'Cancelar'}
                        </Button>
                    )
                }
                
                {
                    buttons?.show?.submit && (
                        <Button
                            type='submit'
                            variant={buttons?.variant?.submit} 
                            onClick={() => onSubmit && onSubmit()}
                            size={buttons?.size?.submit}
                        >
                            {buttons?.text?.submit || 'Salvar'}
                        </Button>
                    )
                }
            </div>
        )
    }
} 