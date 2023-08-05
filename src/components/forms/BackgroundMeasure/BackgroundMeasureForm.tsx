import React from 'react'
import { Button, ButtonsWrapper, FieldWrapper, Form, Input, InputLabel } from './styled';
import useForm from '@/hooks/useForm';

export interface BackgroundMeasureFormProps {
    style?: React.CSSProperties;
}

export const BackgroundMeasureForm: React.FC<BackgroundMeasureFormProps> = ({style}) => {
    // TODO: add on click logic

    const [formData, setFormData, onFieldChange] = useForm({
      averaging: "0.4",
      exposition: 1800
    })

    function resetForm() {
        setFormData({
          averaging: "0.4",
          exposition: 1800
        })
    }

    return (
        <div style={style}>
            <Form onClick={() => {}}>
                <FieldWrapper>
                    <InputLabel>
                        Усреднять спектры с весом
                    </InputLabel>
                    <Input
                        name="averaging"
                        type="number"
                        value={formData.averaging}
                        onChange={onFieldChange}
                        min={0}
                        max={1}
                        step={0.1}
                    />

                    <InputLabel>
                        Время экспозиции
                    </InputLabel>
                    <Input
                        name="exposition"
                        type="number"
                        value={formData.exposition}
                        onChange={onFieldChange}
                        min={1800}
                        step={1800}
                    />
                    <InputLabel>
                        с
                    </InputLabel>



                </FieldWrapper>
            </Form>

            <ButtonsWrapper>
                <Button
                    form="backgroundForm"
                    type="reset"
                    onClick={resetForm}
                >
                    Сброс
                </Button>

                <Button 
                    form="backgroundForm"
                    type="submit"
                    onClick={() => {}}
                    disabled={false}
                >
                    Продолжить
                </Button>

            </ButtonsWrapper>
        </div>
    )
}

export default BackgroundMeasureForm;
