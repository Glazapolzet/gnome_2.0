import styled, { css } from 'styled-components'

export const Form = styled.form``;

export const FieldWrapper = styled.fieldset`
    display: flex;
    flex-direction: column;
    border: 1px solid rgba(40, 44, 52, 0.25);
    border-radius: 4px;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.05);
    margin: 0;
    padding: 15px;
    row-gap: 15px;
`;

export const Legend = styled.legend`
    font-family: inherit;
    font-weight: bold;
`;

export const InputLabel = styled.label`
    max-width: fit-content;
    font-family: inherit;
    font-size: 14px;
`;

export interface InputProps {
    isValid: boolean;
}

export const Input = styled.input<InputProps>`
    padding-left: 5px;
    height: 25px;
    max-width: 300px;
    border: 1px solid rgba(40, 44, 52, 0.25);
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.05);
    border-radius: 4px;

    ${ ({isValid}) => isValid ? 
        css`
            &:focus {
                border: 1px solid rgba(40, 44, 52, 0.75);
                outline: none;
            };
            &::placeholder{
                color: #282c34;
                opacity: 0.5;
            };
        `: 
        css`
            border: 1px solid rgba(218, 21, 21, 0.75);
            &:focus {
                border: 1px solid rgba(218, 21, 21, 0.75);
            };
            &::placeholder {
                color: #DA1515BF;
            };

        `
    }
`;

export interface ButtonSubmitProps {
    disabled?: boolean;
}

export const ButtonSubmit = styled.button<ButtonSubmitProps>`
    border: none;
    margin: 25px 0 10px;
    padding: 15px 70px;
    font-family: inherit;
    font-size: 16px;
    font-weight: bold;
    color: #fff;
    background-color: #372579;
    border-radius: 4px;
    transition: opacity 0.3s ease-out;
    
    ${ ({disabled}) => disabled ?
        css`
            opacity: 0.55;
            cursor: default;
            &:hover {
                opacity: 0.55;
            };
        `:
        css`
            opacity: 1;
            cursor: pointer;
            &:hover {
                opacity: 0.85;
            };
        ` 
    }
`;

