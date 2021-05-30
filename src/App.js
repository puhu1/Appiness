import './App.css';
import Login from "./components/Login";
import EmplyoeeList from "./components/EmplyoeeList";

import { BrowserRouter, Switch, Route } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <header className="App-header">
          <BrowserRouter>
              <Switch>
                  <Route exact path='/' component={Login} />
                  <Route exact path='/emplyoeeList' component={EmplyoeeList} />
              </Switch>
          </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
