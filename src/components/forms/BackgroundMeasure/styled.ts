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

interface ButtonProps {
    disabled?: boolean;
}

// TODO: move to button component
export const Button = styled.div<ButtonProps>`
    min-width: 117px;
    padding: 10px 15px;
    border: 1px solid rgba(0, 0, 0, 0.55);
    border-radius: 4px;
    font-family: inherit;
    font-size: 14px;
    background-color: #eeeeee;

    ${ ({disabled}) => disabled ? 
        css`
            opacity: .7;
            cursor: default;

            &:hover {
                background-color: #eeeeee;
            }
        `:
        css`
            opacity: 1;
            cursor: pointer;

            &:hover {
                background-color: #e1e1e1;
            }
        `
    }
`
