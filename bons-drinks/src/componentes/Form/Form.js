import React from 'react'
import { FormDiv } from './Form.style'

const Form = () => {
    return (
        <FormDiv>
        <form >
            <label htmlFor="name">Seu nome</label><br />
            <input type="text" name="name" required /> <br /><br />
            <label htmlFor="email">Email</label><br />
            <input type="email" name="email" required />  <br /><br />
            <label htmlFor="comment">Mensagem</label><br />
            <textarea name="message" cols="50" rows="10" required></textarea>  <br /><br />
            <input type="submit" placeholder="Enviar"></input>
        </form>
        </FormDiv>
    )
}

export default Form
