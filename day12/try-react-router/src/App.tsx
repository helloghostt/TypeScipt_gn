import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import ScreenA from './ScreenA';
import ScreenB from './ScreenB';
import ScreenC from './ScreenC';

function App() {
  const renderScreenC = (props:any) => {
    console.log("ScreenC props", props);
    return <ScreenC {...props} message="This is a Screen C"/>
  }
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    <Switch>
      <Route exact={true} path='/' component={ScreenA} /> 
      <Route path='/b' component={ScreenB} />
      <Route path='/c/:userid' render={renderScreenC} />  // Add more routes as needed...
    </Switch>
  );
}

export default App;
