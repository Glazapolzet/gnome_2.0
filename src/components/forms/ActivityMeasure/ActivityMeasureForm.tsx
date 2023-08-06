import useForm from "@/hooks/useForm";
import React from "react";
import { Button, ButtonsWrapper, FieldWrapper, Form, Input, InputContainer, InputLabel, InputLabelBack, InputSelection } from "./styled";

export interface ActivityMeasureFormProps {
    style?: React.CSSProperties;
}

export const ActivityMeasureForm: React.FC<ActivityMeasureFormProps> = ({style}) =>  {
    const [formData, setFormData, onFormEvent] = useForm({
        probeType: null,
        probeWeight: null,
        geometry: null,
        rnConsistency: null,
        exposition: null,
    })

    function resetForm() {
        setFormData({
            probeCode: "",
            probeName: "",
            probeDate: "",
            probeType: "Прочие",
            probeMethod: "Натив",
            probeWeight: "1000",
            geometry: "Точка_14мм",
            rnConsistency: "137Cs_и_ЕРН",
            exposition: 3600,
            trials: "1"
        })
    }

    return (
        <div style={style}>
            <Form onSubmit={() => {}}>
                <FieldWrapper>

                    <InputContainer>
                        <InputLabel>
                            Код пробы
                        </InputLabel>
                        <Input
                            name="probeCode"
                            type="number"
                            min={1}
                            value={formData.probeCode}
                            onChange={onFormEvent}
                        />
                        <InputLabelBack/>
                    </InputContainer>

                    <InputContainer>
                        <InputLabel>
                            Название
                        </InputLabel>
                        <Input
                            name="probeName"
                            type="text"
                            minLength={1}
                            value={formData.probeName}
                            onChange={onFormEvent}
                        />
                        <InputLabelBack/>
                    </InputContainer>

                    <InputContainer>
                        <InputLabel>
                            Дата отбора
                        </InputLabel>
                        <Input
                            name="probeDate"
                            type="datetime-local"
                            value={formData.probeDate}
                            onChange={onFormEvent}
                        />
                        <InputLabelBack/>
                    </InputContainer>

                    <InputContainer>
                        <InputLabel>
                            Тип пробы
                        </InputLabel>
                        <InputSelection
                            name="probeType"
                            value={formData.probeType}
                            onChange={onFormEvent}
                        >
                            <option value={"Прочие"}>Прочие</option>
                            <option value={"Пищ.пр"}>Пищ.пр</option>
                            <option value={"Стр.мат"}>Стр.мат</option>
                            <option value={"Вода"}>Вода</option>
                            <option value={"Лес"}>Лес</option>
                        </InputSelection>
                        <InputLabelBack/>
                    </InputContainer>

                    <InputContainer>
                        <InputLabel>
                            Метод пробоподготовки
                        </InputLabel>
                        <InputSelection
                            name="probeMethod"
                            value={formData.probeMethod}
                            onChange={onFormEvent}
                        >
                            <option value={"Натив"}>Натив</option>
                        </InputSelection>
                        <InputLabelBack/>
                    </InputContainer>

                    <InputContainer>
                        <InputLabel>
                            Масса пробы
                        </InputLabel>
                        <InputSelection
                            name="probeWeight"
                            value={formData.probeWeight}
                            onChange={onFormEvent}
                        >
                            <option value={"1000"}>1000</option>
                            <option value={"500"}>500</option>
                        </InputSelection>
                        <InputLabelBack>
                            г
                        </InputLabelBack>
                    </InputContainer>

                    <InputContainer>
                        <InputLabel>
                            Геометрия
                        </InputLabel>
                        <InputSelection
                            name="geometry"
                            value={formData.geometry}
                            onChange={onFormEvent}
                        >
                            <option value={"Точка_14мм"}>Точка_14мм</option>
                            <option value={"Маринелли"}>Маринелли</option>
                            <option value={"Петри"}>Петри</option>
                            <option value={"Половина_Маринелли"}>Половина_Маринелли</option>
                        </InputSelection>
                        <InputLabelBack/>
                    </InputContainer>

                    <InputContainer>
                        <InputLabel>
                            Р/н состав
                        </InputLabel>
                        <Input
                            name="rnConsistency"
                            type="text"
                            minLength={1}
                            value={formData.rnConsistency}
                            onChange={onFormEvent}
                        />
                        <InputLabelBack/>
                    </InputContainer>

                    <InputContainer>
                        <InputLabel>
                            Экспозиция
                        </InputLabel>
                        <Input
                            name="exposition"
                            type="number"
                            min={1800}
                            step={1800}
                            value={formData.exposition}
                            onChange={onFormEvent}
                        />
                        <InputLabelBack>
                            с
                        </InputLabelBack>
                    </InputContainer>
                    
                    <InputContainer>
                        <InputLabel>
                            Повторить измерение
                        </InputLabel>
                        <Input
                            name="trials"
                            type="number"
                            min={1}
                            value={formData.trials}
                            onChange={onFormEvent}
                        />
                        <InputLabelBack>
                            раз
                        </InputLabelBack>
                    </InputContainer>

                </FieldWrapper>
            </Form>

            <ButtonsWrapper>

                <Button
                    form="activityForm"
                    type="reset"
                    onClick={resetForm}
                    label='Сброс'
                />

                <Button
                    form="activityForm"
                    type="submit"
                    onClick={() => {}}
                    disabled={false}
                    label='Продолжить'
                />

            </ButtonsWrapper>
        </div>
    )
}

export default ActivityMeasureForm;
