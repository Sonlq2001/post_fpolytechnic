import React from "react";
// import { Container } from "rsuite";

const Layout = ({ children }) => {
	return (
		<div>
			<div>sidebar</div>
			<div>{children}</div>
		</div>
	);
};

export default Layout;
