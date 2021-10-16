import React from 'react';
import Index from './Pages/Index'
import Leaderboard from './Pages/Leaderboard';

import {
	BrowserRouter as Router,
	Switch,
	Route
  } from "react-router-dom";



function App() {
	return (<Router>
		<Switch>
		  <Route path="/leaderboard">
			  <Leaderboard />
          </Route>
		  <Route path="/">
			  <Index />
          </Route>
        </Switch>
	</Router>)
}
export default App;
