import React from "react";
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./pages";
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'

function App() {
  return (
    <Router>
      <AmplifySignOut />
    <Home />
    </Router>
  );
}


export default withAuthenticator(App);
