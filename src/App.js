import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import ClientContainer from '../src/component/ClientContainer'

const App = (props) => {
     return (
      <div className="app-wraper">
        <Route path='/' render={() => <ClientContainer />} />
      </div>
        )
    }

export default App;
