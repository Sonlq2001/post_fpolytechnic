import React from "react";
import { Grid, Row, Col, Sidenav, Nav, Dropdown, Icon } from "rsuite";
import { useLocation } from "react-router-dom";
import {
	WrapSidebar,
	WrapNav,
	NavAdmin,
	NavAdminLeft,
	NavAdminItem,
	ContentAdmin,
} from "./layout.style";
import NavLink from "./../custom/customLink/NavLink";

const Layout = ({ children }) => {
	const { pathname } = useLocation();
	const breadcrumb = pathname === "/admin" ? "Dashboard" : pathname;
	const replaceText = breadcrumb.replace(/\//g, " ");
	const resultBreadcrumb = replaceText.toUpperCase();
	return (
		<Grid fluid={true} style={{ padding: 0 }}>
			<Row gutter={0}>
				<Col lg={4}>
					<WrapSidebar>
						<Sidenav defaultOpenKeys={["3", "4"]} activeKey="1">
							<Sidenav.Body>
								<Nav>
									<Nav.Item eventKey="1" icon={<Icon icon="group" />}>
										<NavLink to="/">User</NavLink>
									</Nav.Item>
									<Nav.Item eventKey="2" icon={<Icon icon="home" />}>
										<NavLink to="/admin">Home</NavLink>
									</Nav.Item>
									<Dropdown
										eventKey="3"
										title="Category"
										icon={<Icon icon="book2" />}
									>
										<Dropdown.Item eventKey="3-1" className="item-link">
											<NavLink to="/admin/categories">List</NavLink>
										</Dropdown.Item>
										<Dropdown.Item eventKey="3-2" className="item-link">
											<NavLink to="/admin/category/add">Add</NavLink>
										</Dropdown.Item>
									</Dropdown>
									<Dropdown
										eventKey="4"
										title="Post"
										icon={<Icon icon="book2" />}
									>
										<Dropdown.Item eventKey="4-1" className="item-link">
											<NavLink to="/admin/posts">List</NavLink>
										</Dropdown.Item>
										<Dropdown.Item eventKey="4-2" className="item-link">
											<NavLink to="/admin/post/add">Add</NavLink>
										</Dropdown.Item>
									</Dropdown>
								</Nav>
							</Sidenav.Body>
						</Sidenav>
					</WrapSidebar>
				</Col>
				<Col lg={20}>
					<WrapNav>
						<NavAdmin>
							<NavAdminLeft>
								<NavAdminItem>
									<Icon icon="bars" />
								</NavAdminItem>

								<NavAdminItem>
									<Icon icon="search" />
								</NavAdminItem>
							</NavAdminLeft>
							<div>
								<Icon icon="sign-out" />
								Logout
							</div>
						</NavAdmin>

						<ContentAdmin>
							<div className="content-title">{resultBreadcrumb}</div>
							<div className="content-main">{children}</div>
						</ContentAdmin>
					</WrapNav>
				</Col>
			</Row>
		</Grid>
	);
};

export default Layout;
