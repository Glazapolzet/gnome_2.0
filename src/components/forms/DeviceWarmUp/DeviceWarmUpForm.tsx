import React from 'react';
import { Button, Layout } from './styled';

export interface DeviceWarmUpFormProps {
    style?: React.CSSProperties;
}

export const DeviceWarmUpForm: React.FC<DeviceWarmUpFormProps> = ({ style }) => {
    // TODO: add on click logic

    return (
        <Layout style={style}>

            <Button onClick={() => {}}>
                20-30 минут
            </Button>

            <Button onClick={() => {}}>
                10-15 минут
            </Button>

            <Button onClick={() => {}}>
                5 минут
            </Button>

        </Layout>
    )
}

export default DeviceWarmUpForm;
