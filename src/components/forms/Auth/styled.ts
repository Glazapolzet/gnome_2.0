import { PurpleButton } from '@/components/Button/PurpleButton';
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

// TODO: move to Input component
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

export const ButtonSubmit = styled(PurpleButton)`
    margin: 25px 0 10px;
    padding: 15px 70px;
    font-size: 16px;
    font-weight: bold;
    color: #fff;
`

