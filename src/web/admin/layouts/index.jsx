import React from "react";
import { Grid, Row, Col } from "rsuite";

const Layout = ({ children }) => {
	return (
		<Grid fluid={true}>
			<Row>
				<Col lg={6}>sidebar</Col>
				<Col lg={18}>{children}</Col>
			</Row>
		</Grid>
	);
};

export default Layout;
