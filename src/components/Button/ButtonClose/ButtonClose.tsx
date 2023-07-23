import React from 'react';
import { ButtonClose as Button } from './styled';

export interface ButtonCloseProps {
    onClick: () => void;
}

export const ButtonClose: React.FC<ButtonCloseProps> = ({onClick}) => {
    return (
        <Button onClick={onClick}>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L11 11M1 11L11 1" stroke="#444444" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </Button>
    )
}

 
