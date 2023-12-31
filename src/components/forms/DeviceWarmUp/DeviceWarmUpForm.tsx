import React from 'react';
import { Button, Layout } from './styled';

export interface DeviceWarmUpFormProps {
    style?: React.CSSProperties;
}

export const DeviceWarmUpForm: React.FC<DeviceWarmUpFormProps> = ({ style }) => {
    // TODO: add on click logic

    return (
        <Layout style={style}>

            <Button
                onClick={() => {}}
                label='20-30 минут'
            />

            <Button
                onClick={() => {}}
                label='10-15 минут'
            />

            <Button
                onClick={() => {}}
                label='5 минут'
            />

        </Layout>
    )
}

export default DeviceWarmUpForm;
