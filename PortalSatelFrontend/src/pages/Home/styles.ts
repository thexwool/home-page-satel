import styled from 'styled-components';

export const BackgroundPage = styled.video`
    object-fit: cover;
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
`

export const Body = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    align-items: center;
    justify-content: center;
`;

export const IconsBox = styled.div`
    padding: 80px;
    display: flex;
    flex-direction: column;
    background-color: #FFF;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    opacity: 0.9;
`