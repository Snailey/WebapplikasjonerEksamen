import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from '../layouts/Layout';
import Home from '../pages/Home';

const Routes = () => (
    <Router>
        <Layout>
        <Switch>
            <Route exact path="/"><Home /></Route>
        </Switch>
        </Layout>
    </Router>
)
export default Routes