import styled from 'styled-components';

export const MovieInfoCard = styled.div`
    position: absolute;
    top: 0px;
    left: 0px;  
    opacity: 0%;
    width: 200px;
    height: 400px;
    background-color:rgba(0, 0, 0);
    margin: 10px;
    border-radius: 5px;
    color: white;

    &:hover {
        opacity: 80%;
    }
`;

export const InfoTitle = styled.div`
    font-size: 16px;
    font-weight: bold;
    margin-top: 20px;
    margin-bottom: 20px;
`;

export const InfoOverview = styled.div`
    font-size: 14px;
    max-height: 250px;
    overflow-y: auto;
`;

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    color: white;
    margin: 20px;
    font-family: "Raleway", sans-serif;
    height: 100%;
`;