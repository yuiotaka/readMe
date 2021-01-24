import React from 'react';
import Nabvar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home.js';
import aboutme from './components/pages/Aboutme.js';


function App() {
  return (
    <>
    <Router>
       <Nabvar />
       <Switch>
       <Route path='/' exact component={Home} />
       <Route path='/aboutme' component={aboutme} />
       </Switch>
       </Router>
      </>
  );
}

//ビデオは５３；３８までみた。https://www.youtube.com/watch?v=I2UBjN5ER4s&t=1359s
export default App;
