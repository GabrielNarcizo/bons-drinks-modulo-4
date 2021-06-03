import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const AboutUsWrapper = styled.div `
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
    height: 70vh;

    margin-top: 20px;

    img{
        width: 500px;
    }

    p{
        width: 500px;
    }
`