import { ReactComponent as Icon } from '@/assets/icon/cross.svg';
import React from 'react';
import { ButtonClose as Button } from './styled';

export interface ButtonCloseProps {
    onClick: () => void;
}

export const ButtonClose: React.FC<ButtonCloseProps> = ({onClick}) => {
    return (
        <Button onClick={onClick}>
             <Icon/>
        </Button>
    )
}

 
