import React from 'react';
import { Switch } from 'react-router-dom';
import RouteHandler from './components/RouteHandler';
import Home from './pages/Home/home';
import About from './pages/About/about';
import NotFound from './pages/NotFound/notFound';
import Signin from './pages/Signin/signin';
import SignUp from './pages/SignUp/signup';
import AdPage from './pages/AdPages/adPages';
import AddAd from './pages/AddAd/addad';
import Ads from './pages/Ads/ads';

export default () => {
    return (
        <Switch>
            <RouteHandler exact path="/">
                <Home />
            </RouteHandler>
            <RouteHandler exact path="/about">
                <About />
            </RouteHandler>
            <RouteHandler exact path="/signin">
                <Signin/>
            </RouteHandler>
            <RouteHandler exact path="/signup">
                <SignUp />
            </RouteHandler>
            <RouteHandler exact path="/ad/:id">
                <AdPage />
            </RouteHandler>
            <RouteHandler private exact path="/post-an-ad">
                <AddAd />
            </RouteHandler>
            <RouteHandler exact path="/ads">
                <Ads />
            </RouteHandler>
            <RouteHandler>
                <NotFound />
            </RouteHandler>
        </Switch>
    );
}