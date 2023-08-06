import React from "react";
import { Button } from "./styled";

export interface GrayButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label?: string;
    disabled?: boolean,
}

export const GrayButton: React.FC<GrayButtonProps > = ({ label, disabled, ...rest}) => {
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
