import {Route, Switch} from 'react-router-dom'
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
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/classes" component={Classes}/>
            <Route exact path="/products" component={Products}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/login" component={Login}/>
        </Switch>
    </div>
    )

export default App
