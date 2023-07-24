import styled from "styled-components";

export interface LayoutProps {
    isOpen: boolean,
}

export const Layout = styled.div<LayoutProps>`
    visibility: ${({isOpen}) => isOpen ? 'visible' : 'hidden'};
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 650px;
    min-height: 150px;
    background-color: #ffe8a0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid rgba(0, 0, 0, 0.55);
    box-shadow: 0 12px 12px rgba(0, 0, 0, 0.25);
    box-sizing: border-box;
    border-radius: 8px;
    z-index: 2;
`;

export const ToolBar = styled.div`
    display: flex;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 30px;
    background-color: #fff;
`;

export const Name = styled.h2`
    margin: 0 0 0 10px;
    font-size: 14px;
    font-family: inherit;
    font-weight: normal;
`;

export const Title = styled.h2`
    min-width: 680px;
    margin: 20px 0 0;
    padding: 0 30px;
    font-size: 22px;
    font-family: inherit;
    text-align: center;
    line-height: 1.5;
`;

export const Description = styled.p`
    text-align: start;
    margin: 20px 0 0;
    padding: 0 20px;
    font-family: inherit;
    font-size: 16px;
    line-height: 1.4;
`;

