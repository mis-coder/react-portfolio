import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GoogleForm from "./pages/GoogleForm";

function App() {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route exact path='/react-portfolio' component={Home} />
          <Route exact path='/contactform' component={GoogleForm} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
