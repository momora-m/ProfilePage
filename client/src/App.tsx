import React, { FC } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import LoginPage from './components/login/LoginPage';
import Header from './header'
import MainPage from './components/main/MainPage';
import RegisterPage from './components/register/RegisterPage';
import RecipePage from './components/recipe/RecipePage';
import OrderPage from './components/order/OrderPage';
import StockPage from './components/stock/StockPage';
import image from '../src/image/bkgi.png'


// eslint-disable-next-line @typescript-eslint/no-unused-vars
const style = {backgroundImage:`url(${image})`}
const divStyle = {
  backgroundImage: `url(${image})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  width: '100vw',
  height: '100vh'
};


export const App: FC = () => (
  <BrowserRouter>
    <div style={divStyle}>
    <Route component={Header}></Route>
      <Switch>
        <React.Fragment>
          <Route exact path="/" component={LoginPage}></Route>
          <Route exact path="/main" component={MainPage}></Route>
          <Route exact path="/register" component={RegisterPage}></Route>
          <Route exact path="/recipe" component={RecipePage}></Route>
          <Route exact path="/order" component={OrderPage}></Route>
          <Route exact path="/stock" component={StockPage}></Route>
        </React.Fragment>
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
