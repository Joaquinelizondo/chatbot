import Body from './Componentes/Body/body'
import Footer from './Componentes/Footer/Footer'
import Header from './Componentes/Header/header'
import Main from './Componentes/Main/Main'
import Main1 from './Componentes/Main1/Main1'
import Main2 from './Componentes/Main2/Main2'
import "@fontsource/lato/400.css";
import './App.css';
import Carrousel from './Componentes/Carrousel/Carrousel'



const App = () => {
  return (
    <div>
    <Header/>
    <Main/>
    <Carrousel />
    <Main1/>
    <Main2/>
    <Body/>
    <Footer/>
    </div>
  )
}

export default App

