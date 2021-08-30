import styled from "styled-components";

export const Wrap = styled.div`
	padding: 5rem 3rem;
	min-height: 100vh;
	background-color: var(--bg-color);
`;

export const WrapContent = styled.div`
	background-color: var(--white-color);
	padding: 2rem;
	border-radius: 5px;
	box-shadow: 0 2px 5px #eee;
`;

export const WrapHeader = styled.div`
	display: flex;
	align-items: center;

	.btn-delete-all {
		margin-right: 4rem;
	}
`;

export const Table = styled.table`
	width: 100%;
	border: 1px solid var(--bg3-color);
	margin-top: 2rem;

	th,
	td {
		border: 1px solid var(--bg3-color);
	}

	th {
		padding: 8px 1rem;
		border-bottom: 2px solid var(--bg3-color);
	}

	td {
		color: var(--txt-color);
		padding: 8px 1rem;
	}
	tbody tr:nth-child(even) {
		background-color: var(--gray-table);
	}

	tbody tr:hover {
		background-color: var(--blue-1);
	}
`;

export const WrapPagination = styled.div`
	margin-top: 3rem;
`;
