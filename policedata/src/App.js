import React, { Component } from 'react';
import * as api from './api';
import './App.css';
import MapExample from './components/MapExample';
import Selectarea from './components/Selectarea';
class App extends Component {
	state = {
		searches: []
	};
	render() {
		return (
			<div className="App">
				<header>
					{' '}
					<h2>Stop & Search</h2>
				</header>
				<div className="drop-down-box">
					{' '}
					<Selectarea setForce={this.setForce} />
				</div>
				<section className="info-section"> </section>
				<MapExample searchData={this.state.searches} />{' '}
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
