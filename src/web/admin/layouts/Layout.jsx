import React from "react";
import { Grid, Row, Col } from "rsuite";

import { WrapSidebar } from "./layout.style";

const Layout = ({ children }) => {
	return (
		<Grid fluid={true}>
			<Row>
				<Col lg={6}>
					<WrapSidebar>huu son moi code o day</WrapSidebar>
				</Col>
				<Col lg={18}>{children}</Col>
			</Row>
		</Grid>
	);
};

export default Layout;
