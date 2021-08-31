import styled from "styled-components";

export const WrapSidebar = styled.div`
	min-height: 100vh;
	color: var(--first-color);

	.rs-sidenav {
		min-height: 100vh;
	}

	.item-link,
	.rs-dropdown-item-content {
		padding: 0 !important;
	}

	.path-link,
	.path-main {
		display: block;
		text-decoration: none;
		padding: 1.1rem 3rem;
	}
	.path-main {
		padding: 15px 20px 15px 56px;
		color: var(--txt-nav);
	}

	.path-main.active {
		background: var(--bg-active-link);
		color: var(--txt-active-link);
	}

	.rs-nav-item-content {
		padding: 0 !important;
	}
`;

export const WrapNav = styled.div`
	/* padding: 0 2rem; */
`;

export const NavAdmin = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 1.5rem 2.5rem;
	box-shadow: 0 2px 5px #eee;
`;

export const NavAdminLeft = styled.div`
	display: flex;
`;

export const NavAdminItem = styled.div`
	& + & {
		margin-left: 2rem;
	}
`;

export const ContentAdmin = styled.div`
	background-color: var(--bg-color);
	min-height: 95vh;

	.content-title {
		padding: 2rem 2.5rem;
		background-color: var(--bg4-color);
	}

	.content-main {
		padding: 2rem 2.5rem;
	}
`;
