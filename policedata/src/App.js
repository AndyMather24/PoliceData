import React, { Component } from 'react';
import * as api from './api';
import { Link, Router } from '@reach/router';
import './App.css';

import MapExample from './components/MapExample';
import Selectarea from './components/Selectarea';
import Chart from './components/Chart';
class App extends Component {
	state = {
		searches: []
	};
	render() {
		return (
			<div className="App">
				<header>
					{' '}
					<h2>Be Safe.</h2>
					<nav>
						{' '}
						<Link to="/chart">Data Chart</Link>
					</nav>
				</header>
				<div className="drop-down-box">
					{' '}
					<Selectarea setForce={this.setForce} />
				</div>
				<section className="info-section"> </section>
				<MapExample searchData={this.state.searches} />{' '}
				<Router>
					<Chart searches={this.state.searches} path="/chart" />
				</Router>
			</div>
		);
	}
	componentDidMount = () => {
		api.fetchSearches('greater-manchester').then((data) => {
			this.setState({
				searches: data
			});
		});
	};

	setForce = (force) => {
		api.fetchSearches(force).then((data) => {
			this.setState({
				searches: data
			});
		});
	};
}

export default App;
