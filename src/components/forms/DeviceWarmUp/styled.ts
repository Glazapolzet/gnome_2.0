import styled from "styled-components";

export const Layout = styled.div`
    margin: 30px 0 18px;
    display: flex;
    column-gap: 15px;
`

// TODO: move to Button component
export const Button = styled.button`
    min-width: 117px;
    padding: 10px 15px;
    border: 1px solid rgba(0, 0, 0, 0.55);
    border-radius: 4px;
    font-family: inherit;
    font-size: 14px;
    background-color: #eeeeee;
    cursor: pointer;

    &:hover {
        background-color: #e1e1e1;
    }

    &:disabled {
        opacity: .7;
        cursor: default;
    }

    &:disabled:hover {
        background-color: #eeeeee;
    }
`

