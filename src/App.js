import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import AllPhones from './Components/AllPhones';
import Footer from './Components/Footer';
import PhoneSpecs from './Components/PhoneSpecs';

function App() {
  const { phones } = useSelector(state => state)
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' render={() => <AllPhones />} />
          <Route path='/specs/:name' render={(props) =>
            <PhoneSpecs phone={phones} {...props} />} />
          {/* <AllPhones /> */}
        </Switch>
      </BrowserRouter>
      {/* <PhoneSpecs /> */}
      <Footer />

    </>
  );
}

export default App;
