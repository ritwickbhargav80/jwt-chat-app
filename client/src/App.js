import React from "react";
import { Layout } from "antd";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/navBar";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";

import "antd/dist/antd.css";
import "./App.css";

const { Content } = Layout;

const App = () => {
	return (
		<Layout className="layout">
			<NavBar />
			<Content style={{ padding: "0 50px" }}>
				<Switch>
					<Route path="/" component={LoginForm} />
					<Route path="/register" component={RegisterForm} />
				</Switch>
			</Content>
		</Layout>
	);
};

export default App;
