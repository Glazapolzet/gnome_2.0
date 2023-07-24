import useForm from '@/hooks/useForm';
import React, { CSSProperties, useEffect, useState } from 'react';
import { ButtonSubmit, FieldWrapper, Form, Input, InputLabel, Legend } from './styled';

export interface AuthFormProps {
    style?: CSSProperties;
    onSubmit: () => void;
}

export const AuthForm: React.FC<AuthFormProps> = ({style, onSubmit}) => {
    // TODO: maybe we should use another solution for form validation logic (ex form-hook lib or formic)

    const [formFieldEntered, setFormFieldEntered] = useState({
        name: false,
        group: false,
    } as {[index: string]: boolean})

    const [formData, setFormData] = useForm({
        name: "",
        group: "",
    } as {[index: string]: string})

    const [formValid, setFormValid] = useState(false);

    useEffect(() => {
        setFormValid(Object.keys(formData).every(key => formData[key] !== ""))
    }, [formData])

    function isFieldValid(fieldName: string) {
        return formData[fieldName] !== "" || !formFieldEntered[fieldName]
    }

    function handleChange(evt: React.ChangeEvent<HTMLInputElement>) {
        setFormData(evt)
    }

    function handleBlur(evt: React.ChangeEvent<HTMLInputElement>) {
        setFormFieldEntered({
            ...formFieldEntered,
            [`${evt.target.name}`]: true
        });
    }

    return (
        <Form style={style} onSubmit={onSubmit}>
            <FieldWrapper>
                <Legend> Данные студента </Legend>

                <InputLabel> ФИО </InputLabel>
                <Input
                    type="text"
                    name="name"
                    placeholder="Введите фамилию и имя"
                    required={true}
                    value={formData.name}
                    isValid={isFieldValid('name')}
                    onBlur={handleBlur}
                    onChange={handleChange}
                />

                <InputLabel> Группа </InputLabel>
                <Input
                    type="text"
                    name="group"
                    placeholder="Введите свою группу"
                    required={true}
                    value={formData.group}
                    isValid={isFieldValid('group')}
                    onBlur={handleBlur}
                    onChange={handleChange}
                />
            </FieldWrapper>
            
            <ButtonSubmit type="submit" disabled={!formValid}> Начать </ButtonSubmit>
        </Form>
    )
}

export default AuthForm;