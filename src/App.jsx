import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Redirect, Route, Switch, useHistory} from 'react-router-dom/cjs/react-router-dom.min'
import './App.css'
import Home from './pages/Home'
import OrderPizza from './pages/OrderPizza'
import Success from './pages/Success'


function App() {

  return (
    <Router>
    <>
      <Switch>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/orderPizza/:pisim" >
          <OrderPizza />
        </Route>
        <Route path="/success">
          <Success />
        </Route>
      </Switch>

        
    </>
  </Router>
  )
}

export default App
