import React from 'react';
import Index from './Pages/Index'
import Leaderboard from './Pages/Leaderboard';
import Header from './Components/Header';
import {
	BrowserRouter as Router,
	Switch,
	Route
  } from "react-router-dom";



function App() {
	return (<Router>
		<Header />
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
