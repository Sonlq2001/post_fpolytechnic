import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import RouterAdmin from "./../web/admin/index";
const index = () => {
	return (
		<Router>
			<Switch>
				<Route path="/admin" component={RouterAdmin} />
			</Switch>
		</Router>
	);
};

export default index;
