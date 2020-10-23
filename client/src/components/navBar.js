import React from 'react';
import { Layout, Menu } from 'antd';

import logo from "../logo.svg";

import "./stylesheets/navBar.css";

const { Header } = Layout;

const NavBar = () => {
    return (
		<Header>
			<img src={logo} className="App-logo" alt="logo" />
			<Menu theme="dark" mode="horizontal" />
		</Header>
	);
}
 
export default NavBar;