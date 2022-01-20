
import React from 'react';

import './App.css';
import '../src/assets/stylesheets/timeline.css';
import '../src/assets/stylesheets/main.scss';
import StyleGuide from './pages/styleguide/main';

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
      <StyleGuide />
    </div>
  );
}

export default App;


