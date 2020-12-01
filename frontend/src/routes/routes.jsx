import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from '../layouts/Layout';
import Articles from '../pages/Articles';
import Home from '../pages/Home';
import Offices from './../pages/Offices';

const Routes = () => (
    <Router>
        <Layout>
        <Switch>
            <Route exact path="/"><Home /></Route>
        </Switch>
        <Switch>
            <Route exact path="/offices"><Offices /></Route>
        </Switch>
        <Switch>
            <Route exact path="/articles"><Articles /></Route>
        </Switch>
        </Layout>
    </Router>
)
export default Routes