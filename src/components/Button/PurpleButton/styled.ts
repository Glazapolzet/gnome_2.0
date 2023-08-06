import { styled } from "styled-components";

export interface ButtonProps {
    disabled?: boolean;
}

export const Button = styled.div<ButtonProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    text-overflow: ellipsis;
    background-color: #372579;

    font-family: inherit;
    border-radius: 4px;
    transition: opacity 0.3s ease-out;

    opacity: ${({disabled}) => disabled ? '.55' : '1'};
    cursor: ${({disabled}) => disabled ? 'default' : 'pointer'};
    
    &:hover {
        opacity: ${({disabled}) => disabled ? '.55' : '.85'};
    }
`
