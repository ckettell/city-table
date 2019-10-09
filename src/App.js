import React from 'react';
import logo from './logo.svg';
import './App.css';
import  {BrowserRouter as Router, Route} from 'react-router-dom'
import { Switch } from  'react-router'
import CityData from './components/CityData'

function App() {
  return (
    <Router>
    <Switch>
    <Route
    path="/:columnName"
    render={(props) => <CityData {...props} />}
    />
    </Switch>
    </Router>
  );
}


export default App;
