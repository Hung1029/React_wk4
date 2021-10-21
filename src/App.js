import { BrowserRouter, Switch, Route } from 'react-router-dom'

import './App.css';
import Home from './pages/Home';
import Product from './pages/Product'

function App() {
  return (
    <div className="container">
       <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/product/:productId" component={Product}/>
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
