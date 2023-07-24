import React from 'react';
import { Button, Layout } from './styled';

export interface DeviceCalibrationFormProps{
    style?: React.CSSProperties;
    onClick: () => void;
}

export const DeviceCalibrationForm: React.FC<DeviceCalibrationFormProps> = ({onClick, style}) => {
  return (
      <Layout style={style}>
        <Button onClick={onClick}>
          Продолжить
        </Button>
      </Layout>
  )
}

export default DeviceCalibrationForm;
