import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from '../layouts/Layout';
import Articles from '../pages/Articles';
import Article from '../pages/Article';
import Home from '../pages/Home';
import Offices from '../pages/Offices';
import Office from '../pages/Office';
import Contact from '../pages/Contact';

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
            <Route path="/offices/:id"><Office /></Route>
        </Switch>
        <Switch>
            <Route exact path="/articles"><Articles /></Route>
        </Switch>
        <Switch>
            <Route exact path="/articles/:id"><Article /></Route>
        </Switch>
        <Switch>
            <Route path="/contact"><Contact /></Route>
        </Switch>
        </Layout>
    </Router>
)
export default Routes