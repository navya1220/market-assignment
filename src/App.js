import {Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import Login from './components/Login'
import About from './components/About'
import Classes from './components/Classes'
import Products from './components/Products'
import './App.css'
const App = () => (
    <div className='Total-page'>
        <Header/>
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="classes" element={<Classes/>}/>
            <Route exact path="products" element={<Products/>}/>
            <Route exact path="about" element={<About/>}/>
            <Route exact path="login" element={<Login/>}/>
        </Routes>
    </div>
    )

export default App
