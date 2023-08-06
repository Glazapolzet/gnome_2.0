import { GrayButton } from "@/components/Button/GrayButton";
import { css, styled } from "styled-components";

export const Form = styled.form`
    margin: 30px 0 0;
    min-width: 95%;
`

export const FieldWrapper = styled.fieldset`
    margin: 0;
    height: 22px;
    padding: 0 5px;
    display: flex;
    align-items: center;
    border: 1px solid rgba(0, 0, 0, 0.55);
    border-radius: 2px;
`

export const InputLabel = styled.label`
    padding: 0 0 0 2px;
    font-family: inherit;
    font-size: 14px;

`

// TODO: move to input component
export const Input = styled.input`
    height: 100%;
    width: 100px;
    margin: 0 0 0 auto;
    padding: 0 5px;
    border-left: 1px solid rgba(0, 0, 0, 0.55);
    border-right: 1px solid rgba(0, 0, 0, 0.55);
    border-top: none;
    border-bottom: none;
    font-family: inherit;
    font-size: 14px;

    &:focus {
        outline: none;
    }
`

export const ButtonsWrapper = styled.div`
    justify-content: center;
    margin: 30px 0 18px;
    display: flex;
    column-gap: 15px;
`

export const Button = styled(GrayButton)`
    min-width: 117px;
    padding: 10px 15px;
    font-size: 14px;
`
