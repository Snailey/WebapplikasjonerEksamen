import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from '../layouts/Layout';
import Articles from '../pages/Articles';
import Article from '../pages/Article';
import Home from '../pages/Home';
import Offices from '../pages/Offices';
import Office from '../pages/Office';
import Contact from '../pages/Contact';
import MiniCMS from '../pages/MiniCMS';
import Log from '../pages/Log';
import Logs from '../pages/Logs';
import Register from '../pages/Register';

const Routes = () => (
  <Router>
    <Layout>
      <Switch>
        <Route exact path="/offices/">
          <Offices />
        </Route>
      </Switch>
      <Switch>
        <Route path="/offices/:id">
          <Office />
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/articles/">
          <Articles />
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/articles/:id">
          <Article />
        </Route>
      </Switch>
      <Switch>
        <Route path="/contact/">
          <Contact />
        </Route>
      </Switch>
      <Switch>
        <Route path="/newArticle/">
          <MiniCMS />
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/logs/">
          <Logs />
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/logs/:id">
          <Log />
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/register/">
          <Register />
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Layout>
  </Router>
);
export default Routes;
