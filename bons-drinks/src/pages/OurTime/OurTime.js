import React from 'react'
import { Container } from '../AboutUs/AboutUs.style'
import { OurTimeWrapper } from './OurTime.style'
import NavBar from '../../componentes/Nav/NavBar'
import Footer from '../../componentes/Footer/Footer'

const OurTime = () => {
    return (
        <>
        <NavBar />
        <Container>
            <OurTimeWrapper>
                <div>
                <img src="https://avatars.githubusercontent.com/u/75431544?s=400&u=85f92bc64e8fca9775a1342486920411cd8a9db4&v=4" alt="Imagem do integrante do time" />
                <h5>Gabriel</h5>
                <p>Desenvolvedor Front-end</p>
                </div>
                <div>
                <img src="https://avatars.githubusercontent.com/u/75431544?s=400&u=85f92bc64e8fca9775a1342486920411cd8a9db4&v=4" alt="Imagem do integrante do time" />
                <h5>Eli</h5>
                <p>Desenvolvedor Front-end</p>
                </div>
                <div>
                <img src="https://avatars.githubusercontent.com/u/75431544?s=400&u=85f92bc64e8fca9775a1342486920411cd8a9db4&v=4" alt="Imagem do integrante do time" />
                <h5>Eli Gabriel</h5>
                <p>Desenvolvedor Front-end</p>
                </div>
            </OurTimeWrapper>
        </Container>
        <Footer />
        </>
    )
}

export default OurTime
