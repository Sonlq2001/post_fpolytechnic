import React from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "./layouts/Layout";

import Dashboard from "./pages/dashboard/Dashboard";
import PostAdd from "./pages/post/actionsPost/PostAdd";
import Post from "./pages/post/Post";
import Category from "./pages/category/Category";
import CategoryAdd from "./pages/category/actionCategory/CategoryAdd";

const RouterAdmin = () => {
	return (
		<Switch>
			<Layout>
				<Route exact path="/admin" component={Dashboard} />
				<Route path="/admin/posts" component={Post} />
				<Route path="/admin/post/add" component={PostAdd} />

				<Route path="/admin/categories" component={Category} />
				<Route path="/admin/category" component={CategoryAdd} />
			</Layout>
		</Switch>
	);
};

export default RouterAdmin;
