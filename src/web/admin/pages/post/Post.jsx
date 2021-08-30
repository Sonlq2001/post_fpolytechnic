import React from "react";
import { Container, Button, Whisper, Input, Tooltip, Pagination } from "rsuite";

import {
	Wrap,
	WrapContent,
	WrapHeader,
	Table,
	WrapPagination,
} from "./style.post";
const Post = () => {
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
								<th>#</th>
								<th>Title</th>
								<th>Image</th>
								<th>Category</th>
								<th>Description</th>
								<th>Auth</th>
								<th>Action</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>1</td>
								<td>asdf</td>
								<td>Image</td>
								<td>Category</td>
								<td>Description</td>
								<td>Autd</td>
								<td>Action</td>
							</tr>
							<tr>
								<td>1</td>
								<td>asdf</td>
								<td>Image</td>
								<td>Category</td>
								<td>Description</td>
								<td>Autd</td>
								<td>Action</td>
							</tr>
							<tr>
								<td>1</td>
								<td>asdf</td>
								<td>Image</td>
								<td>Category</td>
								<td>Description</td>
								<td>Autd</td>
								<td>Action</td>
							</tr>
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

export default Post;
