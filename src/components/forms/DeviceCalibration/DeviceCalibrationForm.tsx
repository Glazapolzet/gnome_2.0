import React from 'react';
import { Button, Layout } from './styled';

export interface DeviceCalibrationFormProps{
    style?: React.CSSProperties;
}

export const DeviceCalibrationForm: React.FC<DeviceCalibrationFormProps> = ({ style }) => {

    // TODO: add on click logic

    return (
        <Layout style={style}>
            <Button onClick={() => {}}>
                Продолжить
            </Button>
        </Layout>
    )
}

export default DeviceCalibrationForm;
