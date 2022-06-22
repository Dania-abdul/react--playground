
import React from 'react';

import './App.css';
import '../src/assets/stylesheets/timeline.css';
// css in order 
import '../src/assets/stylesheets/styleguide.scss';
import '../src/assets/stylesheets/main.scss';

import Layout from './layout';

function App() {

  return (
    <div>
      {/* <HashRouter>
        <Routes>
          <Route path="/layout" element={<Layout />} />
          <Route path="/styleguide" element={<StyleGuide />} />
        </Routes>
      </HashRouter> */}
      <Layout />
    </div>
  );
}

export default App;


