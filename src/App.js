import React from 'react';
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';
// import { HashRouter as Router, Route } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import NameForm from './components/prompt/NameForm';
import PropViewer from './components/prompt/PropViewer';

const App = () => {

    return (
        <Router>
            <div>
                <Header />
                <Sidebar />
                <div className='rightContentContainer'>
                    <switch>
                        <Route path='/' component={Home} exact />
                        <Route path='/prompt' component={NameForm} />
                        <Route path='/props' component={PropViewer} />
                    </switch>

                </div>
            </div>
        </Router >
    );
};


export default App;