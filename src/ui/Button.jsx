import React, { useState } from 'react'
import styled, {css} from 'styled-components'

const type = {
    filter: css`
        border: 2px solid transparent;
        &:hover{
            color: #636363;
            /* background-color: #E1E4EA; */
        }
    `,
    favorite: css`
        border: 2px solid transparent;
        border-radius: 15px;
        font-size: 12px;
        color: #f2f2f2;
        background-color: #E54065;
        padding: 5px 10px;
        height: min-content;
        /* position: fixed; */
    `,
    activeBtn: css`
        border: 2px solid #CFC2DC;
        border-radius: 14px;
        color: #636363;
        background-color: #E1E4EA;
    `
}

const StyledButton = styled.button`
    background-color: transparent;
    padding: 3px 10px;
    font-weight: 500;
    font-size: 15px;
    ${(props) => type[props.type]}
    cursor: pointer;

`;

export default function Button({type, children}) {

    const [isactive, setIsActive] = useState(false);
    // const [activeBtn, setActiveBtn] = useState(null);
    return <StyledButton type={type}>{children}</StyledButton>;
};
