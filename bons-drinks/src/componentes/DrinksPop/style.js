import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fff;
    margin-bottom: 10px;
    margin-top: 20px;
`

export const ContainerWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;
`

export const DrinksCard = styled.div`
    background: #000;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    transition: all 0.2s ease-in-out;
    height: 200px;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }

    img {
        height: 150px;
        width: 100%;
    }

    p {
        color: #fff;
        margin-top: 5px;
    }
`;

export const H1 = styled.h1`
    color: red;
    font-size: 20px;
`