import React from 'react'
import Form from '../../componentes/Form'
import { FormDiv } from '../../componentes/Form/style'
import NavBar from '../../componentes/Nav'
import Footer from '../../componentes/Footer'
import { ContainerContact } from './style'

const Contact = () => {
    return (
        <>
        <NavBar />
        <ContainerContact>
        <h1 >Fale com a gente!</h1>
        <FormDiv>
            <Form />
        </FormDiv>
        </ContainerContact>
        <Footer />
        </>
    )
}

export default Contact
