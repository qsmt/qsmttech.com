import React, {Component} from 'react';
import ReactDOM from 'react-dom';
// import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import {BrowserRouter, Link, Route, NavLink, HashRouter} from 'react-router-dom';

import {LinkContainer} from 'react-router-bootstrap';

// import 'bootstrap/less/bootstrap.less';
import '../less/style.less';

import {Index, About, Portfolio, Solutions, Partners, Career, Footer} from './components';


import logo from '../images/logo.png';

const routers = (
	<HashRouter>
		<div>
			<Navbar inverse collapseOnSelect>
				<Navbar.Header>
					<Navbar.Brand>
						<Link to='/'>
							<span><img src={logo}/></span>
							青色麦田
						</Link>
					</Navbar.Brand>
					<Navbar.Toggle />
				</Navbar.Header>
				<Navbar.Collapse>
					<Nav pullRight>
						<LinkContainer to="/" exact={true}><NavItem eventKey={1}>首页</NavItem></LinkContainer>
						<LinkContainer to={About.path}><NavItem eventKey={2} href="#">关于我们</NavItem></LinkContainer>
						<LinkContainer to={Portfolio.path}><NavItem eventKey={3} href="#">成功案例</NavItem></LinkContainer>
						<LinkContainer to={Solutions.path}><NavItem eventKey={4} href="#">解决方案</NavItem></LinkContainer>
						<LinkContainer to={Partners.path}><NavItem eventKey={5} href="#">伙伴计划</NavItem></LinkContainer>
						<LinkContainer to={Career.path}><NavItem eventKey={6} href="#">加入我们</NavItem></LinkContainer>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
			<Route exact={true} path="/" component={Index}/>
			<Route path={About.path} component={About}/>
			<Route path={Portfolio.path} component={Portfolio}/>
			<Route path={Solutions.path} component={Solutions}/>
			<Route path={Partners.path} component={Partners}/>
			<Route path={Career.path} component={Career}/>
			{/*</Route>*/}
			<Footer/>
		</div>
	</HashRouter>
);


ReactDOM.render(
	routers,
	document.getElementById('root')
);
