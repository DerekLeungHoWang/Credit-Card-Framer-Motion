
import './App.css';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import CreditCard from './Components/CreditCard/CreditCard';
import Home from './Home/Home';
import Payment from './Components/Payment';
import Test from './Components/Test/Test';




function App() {
  return (

    <div className="App">
      <Router>
        <Route
          render={({ location }) => (
            <AnimatePresence   >
              <Switch location={location} key={location.pathname}>
                <Route exact path="/" component={Payment} />

              </Switch>
            </AnimatePresence>
          )}
        />
        {/* <Navbar /> */}

      </Router>
    </div>
  );
}

export default App;
