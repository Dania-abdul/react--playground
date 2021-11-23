
import React from 'react';
import { BrowserRouter as Router,
  Route, 
  Routes,
} from "react-router-dom";

import './App.css';
import '../src/assets/stylesheets/timeline.css';
import '../src/assets/stylesheets/main.scss';

import Layout from './Layout'

function App() {

  return (
    <Router>
      <Routes>
        {/* <Route path="/home">Home</Route> */}
        <Route path="/list" element={ <Layout />} />
        {/* <Route path="/page">Page</Route> */}
      </Routes> 
    </Router>


 
  );
}

export default App;


