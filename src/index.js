import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import GlobalStyle from "./styles";
import "rsuite/dist/styles/rsuite-default.css";
import { Provider } from "react-redux";
import store from "./web/redux/store";

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<GlobalStyle />
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);
