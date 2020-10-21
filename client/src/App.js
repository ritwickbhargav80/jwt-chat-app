import React from 'react';
import { Route, Switch } from "react-router-dom";
import LoginForm from './components/loginForm';

import "antd/dist/antd.css";
import './App.css';

function App() {
  return (
    <Switch>
      <Route path="/" component={LoginForm} />
    </Switch>
  );
}

export default App;
