import React from 'react';
import Index from './Pages/Index'

import {
	BrowserRouter as Router,
	Switch,
	Route
  } from "react-router-dom";


function App() {
	return (<Router>
		<Switch>
          <Route path="/">
            <Index />
          </Route>
		  <Route path="/leaderboard">
            <Index />
          </Route>
        </Switch>
	</Router>)
}
export default App;
