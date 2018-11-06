import React, { Component } from 'react';
import * as api from './api';
import './App.css';
import MapExample from './components/MapExample';
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
				<div className="drop-down-box"> drop down box here</div>
				<section className="map-section">
					{' '}
					<MapExample />{' '}
				</section>
				<section className="info-section"> Search info goes here </section>
			</div>
		);
	}
	componentDidMount = () => {
		api.fetchSearches().then((data) => {
			this.setState({
				searches: data
			});
		});
	};
}

export default App;
