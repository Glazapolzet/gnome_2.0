import React from 'react';
import { Button, Layout } from './styled';

export interface DeviceWarmUpFormProps {
    style?: React.CSSProperties;
    fstButton: () => void;
    sndButton: () => void;
    trdButton: () => void;
}

export const DeviceWarmUpForm: React.FC<DeviceWarmUpFormProps> = ({fstButton, sndButton, trdButton, style}) => {
  return (
      <Layout style={style}>
        <Button onClick={fstButton}>
          20-30 минут
        </Button>
        <Button onClick={sndButton}>
          10-15 минут
        </Button>
        <Button onClick={trdButton}>
          5 минут
        </Button>
      </Layout>
  )
}

export default DeviceWarmUpForm;
