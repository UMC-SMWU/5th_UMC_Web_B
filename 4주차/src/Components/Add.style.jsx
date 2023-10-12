import styled from 'styled-components';

export const Addcontent = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    box-sizing:border-box;
    opacity:0;
    background-color:black;
    color:white;
    font-size: 13px;
    width:100%;
    height:100%;
    padding:15px;
    max-height: 330px;
    overflow: auto;
    &:hover{
        opacity:0.8;
    }
    `;

  