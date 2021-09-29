import React from 'react';
import { Switch, Route} from 'react-router-dom';
import Home from './pages/Home/home';
import About from './pages/About/about';
import NotFound from './pages/NotFound/notFound';
import Signin from './pages/Signin/signin';
import SignUp from './pages/SignUp/signup';
import AdPage from './pages/AdPages/adPages';


export default () => {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/about">
                <About />
            </Route>
            <Route exact path="/signin">
                <Signin/>
            </Route>
            <Route exact path="/signup">
                <SignUp />
            </Route>
            <Route>
                <AdPage exact path="/ad/:id"/>
            </Route>
            <Route>
                <NotFound />
            </Route>
        </Switch>
    );
}