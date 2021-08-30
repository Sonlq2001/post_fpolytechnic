import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavLink = ({ children, ...props }) => {
	const { pathname } = useLocation();
	const { to } = props;
	const idActive = pathname === to ? "active" : "";
	return (
		<Link {...props} className={`path-main path-admin ${idActive}`}>
			{children}
		</Link>
	);
};

export default NavLink;
