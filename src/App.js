import React from 'react';
import { Router, Route } from 'react-router-dom';
import history from './history';
import UserProvider from './contexts/UserProvider';
import Home from './pages/Home';
import MenuBar from './components/menus/MenuBar';

const App = () => {
    return (
        <Router history={history}>
            <UserProvider>
                <Route path="/" component={MenuBar} />
                <Route path="/" component={Home} />
            </UserProvider>
        </Router>
    );
};

export default App;
