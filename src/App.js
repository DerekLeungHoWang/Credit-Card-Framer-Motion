
import './App.css';
 
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import CreditCard from './Components/CreditCard/CreditCard';
 



function App() {
  return (
 
    <Router>
      <Route
        render={({ location }) => (
          <AnimatePresence   >
            <Switch location={location} key={location.pathname}>
              <Route exact path="/" component={CreditCard} />

            </Switch>
          </AnimatePresence>
        )}
      />
      {/* <Navbar /> */}

    </Router>
  );
}

export default App;
