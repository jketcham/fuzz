import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import Home from './components/home'


const router = () => (
  <Router>
    <Route path="/" component={Home} />
  </Router>
);

export default router
