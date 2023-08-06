import React from "react";
import { Button } from "./styled";

export interface GrayButtonProps {
    label?: string;
    disabled?: boolean,
}

export const GrayButton: React.FC<GrayButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ label, disabled, ...rest}) => {
    return (
        <Button 
            disabled={disabled}
            {...rest}
        >
            { label }
        </Button>
    )
}

export default GrayButton;
