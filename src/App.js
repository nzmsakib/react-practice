import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React, { useEffect, useState } from 'react';


function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/user">
            <User />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;

function Home() {
  const [cnt, updateCnt] = useState(0);
  useEffect(() => {
    let timer = setInterval(() => {
      updateCnt(cnt + 1);
    }, 2000);

    return function cleanup() {
      clearInterval(timer)
    }
  })

  return <div>
    <h1>Counter: {cnt}</h1>
  </div>
}

function About() {
  return <div>
    <h1>
      About Myself
    </h1>
    <p>
      A paragraph about myself
    </p>
  </div>
}

function User() {
  return <div>
    <h1>Username here</h1>
    <h2>Email here</h2>
  </div>
}