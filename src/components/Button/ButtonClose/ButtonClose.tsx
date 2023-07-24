import { ReactComponent as Icon } from '@/assets/icon/cross.svg';
import React, { CSSProperties } from 'react';
import { ButtonClose as Button } from './styled';

export interface ButtonCloseProps {
    style?: CSSProperties;
    onClick: () => void;
}

export const ButtonClose: React.FC<ButtonCloseProps> = ({style, onClick}) => {
    return (
        <Button style={style} onClick={onClick}>
            <Icon style={{width: style?.width, height: style?.height}}/>
        </Button>
    )
}

 
