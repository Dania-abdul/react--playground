import React from 'react';
import './index.css';
import { BrowserRouter as Router,
  Route, 
  HashRouter,
  Routes,
} from "react-router-dom";

import Header from './components/header';
import Components from './pages/components';
import Home from './pages/home';
import StyleGuide from './pages/styleguide/main';


export class Layout extends React.Component {
    constructor() {
        super();
        this.state = {};
    }
    render() {
        return (
            <div className="main--page">
                <HashRouter>
                    <Header />
                    <div className="main__container">
                        <Routes>
                            <Route path="/home" element={<Home />} />
                            <Route path="/components" element={ <Components />} />
                            <Route path="/styleguide" element={ <StyleGuide />} />
                        </Routes>
                    </div>
                </HashRouter>
            </div>
        )
    }
}

export default Layout