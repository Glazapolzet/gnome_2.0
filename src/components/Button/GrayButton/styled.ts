import { styled } from "styled-components";

export interface ButtonProps {
    disabled?: boolean;
}

export const Button = styled.div<ButtonProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    text-overflow: ellipsis;
    background-color: #eeeeee;

    font-family: inherit;
    border-radius: 4px;

    border: 1px solid rgba(0, 0, 0, 0.55);

    opacity: ${({disabled}) => disabled ? '.7' : '1'};
    cursor: ${({disabled}) => disabled ? 'default' : 'pointer'};
    
    &:hover {
        background-color: ${({disabled}) => disabled ? '#eeeeee' : '#e1e1e1'};
    }
`
