import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import GlobalStyle from '../src/styles/globalStyle'
import Routes from './routes/Routes'

const App = () => {
    return (
    <BrowserRouter>
      <GlobalStyle />
        <Routes />
    </BrowserRouter>
    )
}

export default App
