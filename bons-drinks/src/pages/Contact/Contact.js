import React from 'react'
import Form from '../../componentes/Form/Form'
import { FormDiv } from '../../componentes/Form/Form.style'
import NavBar from '../../componentes/Nav/NavBar'
import Footer from '../../componentes/Footer/Footer'
import { ContainerContact } from './Contact.style'

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
