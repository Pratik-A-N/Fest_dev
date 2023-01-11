import React, { Component } from 'react';
import { BrowserRouter as Router,Routes, Route,} from 'react-router-dom';
import Home from './Components/Home';

import './App.css';
import Sponsors from './Components/Sponsors';
import Events from './Components/Events';
import Compi from './Components/Compi';
import Reg from './Components/Reg';
import Contact from './Components/Contact';
import Ticket from './Components/Ticket';

class App extends Component {
  render() {
    return (
    <Router basename={'/fest'}>
      <div className="App">
      <Routes>
          <Route path='/' element={ <Home/> }></Route>
          <Route exact path='/sponsors' element={ <Sponsors/> }></Route>
          <Route exact path='/events' element={ <Events/> }></Route>
          <Route exact path='/compi' element={ <Compi/> }></Route>
          <Route exact path='/register' element={ <Reg/> }></Route>
          <Route exact path='/contact' element={ <Contact/> }></Route>
          <Route exact path='/ticket' element={ <Ticket/> }></Route>

          {/* <Route exact path='/contact' element={ <Contact/> }></Route> */}
          {/* <Route exact path='/card' element={ <Card/> }></Route> */}
          {/* <Route exact path='/login' element={ <Login/> }></Route>
          <Route exact path='/structure' element={ <Structure/> }></Route>
          <Route exact path='/mentorreg' element={ <Mentorreg/> }></Route>
          <Route exact path='/submitted' element={ <Submitted/> }></Route>
          <Route exact path='/session' element={ <Session/> }></Route>
          <Route exact path='/playbook' element={ <Playbook/> }></Route>
           */}
      </Routes>
      </div>
    </Router>
  );
  }
  }
  
  export default App;