import React from "react";
import { Button } from "./styled";

export interface PurpleButtonProps {
    label?: string;
    disabled?: boolean,
}

export const PurpleButton: React.FC<PurpleButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ label, disabled, ...rest}) => {
    return (
        <Button 
            disabled={disabled}
            {...rest}
        >
            { label }
        </Button>
    )
}

export default PurpleButton;
