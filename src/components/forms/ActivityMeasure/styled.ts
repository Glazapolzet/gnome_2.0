import { css, styled } from "styled-components";

export const Form = styled.form`
    margin: 20px 0 0;
    display: flex;
    width: 95%;
`

export const FieldWrapper = styled.fieldset`
    padding: 0;
    margin: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    border: 1px solid rgba(0, 0, 0, 0.55);
    border-radius: 2px;
`

export const InputContainer = styled.div`
    margin: 0;
    padding: 0 5px;
    height: 22px;
    display: flex;
    align-items: center;
    border: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.55);
    
    &:nth-last-of-type(1) {
        border-bottom: none;
    }
`

export const InputLabel = styled.label`
    min-width: 45%;
    max-width: 45%;
    padding: 0;
    font-family: inherit;
    font-size: 14px;
`

export const InputLabelBack = styled.label`
    padding: 0 0 0 5px;
    min-width: 10%;
    max-width: 10%;
`

export const Input = styled.input`
    margin: 0;
    height: 22px;
    min-width: 321px;
    max-width: 321px;
    padding: 0 4px;
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

export const InputSelection = styled.select`
    padding: 0;
    min-width: 331px;
    max-width: 331px;
`

export const ButtonsWrapper = styled.div`
    justify-content: center;
    margin: 30px 0 20px;
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
