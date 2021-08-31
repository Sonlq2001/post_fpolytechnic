import React, { useState } from "react";
import { Title, FormControls } from "./styled.postAdd";
import { Form, FormGroup, ControlLabel, Button } from "rsuite";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import styled from "styled-components";
import { WrapContent } from "./../style.post";

const Editor = styled(CKEditor)`
	max-height: 500vh;
	width: 100%;
`;
const PostAdd = () => {
	const [text, setText] = useState("");
	return (
		<WrapContent>
			<Title> Bài Viết Mới</Title>
			<Form fluid>
				<FormGroup>
					<ControlLabel>Tiêu đề</ControlLabel>
					<FormControls name="title" />
				</FormGroup>
				<FormGroup>
					<Editor
						editor={ClassicEditor}
						data={text}
						onChange={(event, editor) => {
							const data = editor.getData();
							setText(data);
						}}
					/>
				</FormGroup>
				<FormGroup>
					<Button appearance="primary">Submit</Button>
				</FormGroup>
			</Form>
		</WrapContent>
	);
};

export default PostAdd;
