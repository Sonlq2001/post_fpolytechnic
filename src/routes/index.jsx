import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import RouterAdmin from "./../web/admin/index";
import Login from "./../web/clients/auth/login/Login";
const index = () => {
	return (
		<Router>
			<Switch>
				<Route path="/admin" component={RouterAdmin} />
				<Route path="/sign-in" component={Login} />
			</Switch>
		</Router>
	);
};

export default index;
