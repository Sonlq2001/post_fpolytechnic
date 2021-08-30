import React from "react";
import { Grid, Row, Col } from "rsuite";

import { WrapSidebar } from "./layout.style";
import SideBar from "./sidebar";
import styled  from "styled-components"
const Div = styled(Col)`
	padding: 0px;
`
const Layout = ({ children }) => {
	return (
		<Grid fluid={true}>
			<Row>
				<Div lg={4}>
					<WrapSidebar>
						<SideBar />
					</WrapSidebar>
				</Div>
				<Col lg={20}>{children}</Col>
			</Row>
		</Grid>
	);
};

export default Layout;
