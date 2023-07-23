import React from 'react';
import { Description, Layout, Name, Title, ToolBar } from './styled';
import { ButtonClose } from '../Button/ButtonClose';

interface PopupProps {
    name: string,
    title: string,
    description: string,
    onClose: () => void,
    children?: React.ReactNode
}

export const Popup: React.FC<PopupProps> = ({name, title, description, onClose, children}) => {
    const [isOpen, setOpen] = React.useState(true);
    
    function handleClose() : void {
        setOpen(false);
        onClose()
    }

    return (
        <Layout isOpen={isOpen}>
            <ToolBar> 
                <Name> { name } </Name>
                <ButtonClose onClick={handleClose}/>
            </ToolBar>

            <Title> { title } </Title>
            <Description> { description } </Description>
            
            { children }

        </Layout>
    )
}

