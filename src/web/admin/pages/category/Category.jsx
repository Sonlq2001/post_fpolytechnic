import React, { useEffect } from "react";
import {
	Container,
	Button,
	Whisper,
	Input,
	Tooltip,
	Pagination,
	Loader,
	Icon,
	Checkbox,
} from "rsuite";
import { useDispatch, useSelector } from "react-redux";

import {
	Wrap,
	WrapContent,
	WrapHeader,
	Table,
	WrapPagination,
} from "./../post/style.post";
import { fetchCategory } from "./redux/actions/categoryAction";

const Category = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchCategory());
	}, [dispatch]);

	const { loading, data } = useSelector((state) => state.category);

	if (loading) {
		return <Loader content="Loading..." center size="sm" />;
	}

	return (
		<Container>
			<Wrap>
				<WrapContent>
					<WrapHeader>
						<Button color="red" className="btn-delete-all">
							Delete All
						</Button>
						<Whisper
							trigger="focus"
							className="input-search"
							speaker={<Tooltip>Required</Tooltip>}
						>
							<Input style={{ width: 300 }} placeholder="Search" />
						</Whisper>
					</WrapHeader>

					<Table>
						<thead>
							<tr>
								<th style={{ width: "50px" }}>
									<Checkbox />
								</th>
								<th>#</th>
								<th>Title</th>
								<th>Action</th>
							</tr>
						</thead>
						<tbody>
							{data.map((cate, index) => {
								return (
									<tr>
										<td>
											<Checkbox />
										</td>
										<td>{index + 1}</td>
										<td>{cate.name}</td>
										<td style={{ textAlign: "center" }}>
											<Button color="orange" style={{ marginRight: "20px" }}>
												<Icon icon="edit2" />
											</Button>

											<Button color="red">
												<Icon icon="trash2" />
											</Button>
										</td>
									</tr>
								);
							})}
						</tbody>
					</Table>

					<WrapPagination>
						<Pagination
							prev
							last
							next
							first
							size="sm"
							pages={10}
							className="table-pagination"
						/>
					</WrapPagination>
				</WrapContent>
			</Wrap>
		</Container>
	);
};

export default Category;
