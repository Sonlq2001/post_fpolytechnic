import React from "react";
import { Grid, Row, Col, Sidenav, Nav, Dropdown, Icon } from "rsuite";

import { WrapSidebar } from "./layout.style";
import NavLink from "./../custom/customLink/NavLink";

const Layout = ({ children }) => {
	return (
		<Grid fluid={true}>
			<Row>
				<Col lg={4}>
					<WrapSidebar>
						<Sidenav defaultOpenKeys={["3", "4"]} activeKey="1">
							<Sidenav.Body>
								<Nav>
									<Nav.Item eventKey="2" icon={<Icon icon="group" />}>
										<NavLink to="/">User</NavLink>
									</Nav.Item>
									<Nav.Item eventKey="2" icon={<Icon icon="group" />}>
										<NavLink to="/admin">Home</NavLink>
									</Nav.Item>
									<Dropdown
										eventKey="3"
										title="Advanced"
										icon={<Icon icon="magic" />}
									>
										<Dropdown.Item eventKey="3-1" className="item-link">
											<NavLink
												to="/admin/posts"
												className="path-link path-admin"
											>
												List
											</NavLink>
										</Dropdown.Item>
										<Dropdown.Item eventKey="3-1" className="item-link">
											<NavLink
												to="/admin/post/add"
												className="path-link path-admin"
											>
												Add
											</NavLink>
										</Dropdown.Item>
									</Dropdown>
								</Nav>
							</Sidenav.Body>
						</Sidenav>
					</WrapSidebar>
				</Col>
				<Col lg={20}>{children}</Col>
			</Row>
		</Grid>
	);
};

export default Layout;
