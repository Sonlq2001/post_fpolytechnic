import React from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "./layouts/Layout";

import Dashboard from "./pages/dashboard/Dashboard";
import Post from "./pages/post/Post";

const RouterAdmin = () => {
	return (
		<Switch>
			<Layout>
				<Route exact path="/admin" component={Dashboard} />
				<Route path="/admin/posts" component={Post} />
			</Layout>
		</Switch>
	);
};

export default RouterAdmin;
