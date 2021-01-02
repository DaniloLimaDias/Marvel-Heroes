import { GlobalStyle } from "./styles/index";
import Home from './pages/home/home'
import AboutCharacters from './pages/about-characters/about-characters'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div>
      <GlobalStyle/>
      <Router>
        <Switch>
        <Route path="/sobre/:id">
            <AboutCharacters />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router> 
    </div>
  );
}

export default App;
