import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import AllPhones from './Components/AllPhones';
import Footer from './Components/Footer';
import Home from './Components/Home';
import PhoneSpecs from './Components/PhoneSpecs';
import ShoppingCart from './Components/ShoppingCart';
import TopBar from './Components/TopBar';

function App() {
  const { phones } = useSelector(state => state)
  return (
    <>
      <BrowserRouter>
        <TopBar />
        <Switch>
          <Route exact path='/' render={() => <Home />} />
          <Route exact path='/phones' render={() => <AllPhones />} />
          <Route exact path='/store' render={() => <ShoppingCart />} />
          <Route path='/specs/:name' render={(props) =>
            <PhoneSpecs phone={phones} {...props} />} />
        </Switch>
      </BrowserRouter>
      <Footer />

    </>
  );
}

export default App;
