import React from "react";
import { Button } from "./styled";

export interface PurpleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label?: string;
    disabled?: boolean,
}

export const PurpleButton: React.FC<PurpleButtonProps > = ({ label, disabled, ...rest}) => {
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
