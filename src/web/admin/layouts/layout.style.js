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
	}

	/* .path-link.active {
		background: var(--bg-active-link);
		color: var(--txt-active-link);
	} */

	.path-admin.active {
		background: var(--bg-active-link);
		color: var(--txt-active-link);
	}

	.rs-nav-item-content {
		padding: 0 !important;
	}
`;
