import React from 'react'
import NavBar from './componentes/Nav'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './componentes/Main';
import Footer from './componentes/Footer';
import GlobalStyle from './styles/globalStyle';

const App = () => {
  return (
    <div>
      <Router>
      <GlobalStyle />
      <NavBar />
      <Main />
      <Footer />
      </Router>
    </div>
  )
}

export default App

