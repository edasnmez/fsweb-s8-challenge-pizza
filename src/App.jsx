import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Redirect, Route, Switch, useHistory} from 'react-router-dom/cjs/react-router-dom.min'
import './App.css'
import Home from './pages/Home'
import OrderPizza from './pages/OrderPizza'
import Success from './pages/Success'
import { useState } from 'react';



function App() {
  const [orderData, setOrderData] = useState(null);
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
          <OrderPizza  setOrderData={setOrderData} />
        </Route>
        <Route path="/success">
          <Success orderData={orderData} />
        </Route>
      </Switch>

        
    </>
  </Router>
  )
}

export default App
