import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Container from "./containers/Container/Container";
import Layout from "./components/Layout/Layout";


function App() {
  return (
      <div className="App">
        <BrowserRouter>
          <Layout>
            <Switch>
              <Route path="/pages/:name"  component={Container}/>
            </Switch>
          </Layout>
        </BrowserRouter>
      </div>
  );
}

export default App;
