import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LayoutClient from "../web/client";

import RouterAdmin from "./../web/admin/index";
const index = () => {
	return (
		<Router>
			<Switch>
				<Route path="/admin" component={RouterAdmin} />
				<Route path="/" component={LayoutClient} />
			</Switch>
		</Router>
	);
};

export default index;
