import React, { Component } from 'react';
import * as api from '../api';
class Selectarea extends Component {
	state = {
		forces: []
	};
	render() {
		return (
			<div>
				<select onChange={this.handleChange}>
					{this.state.forces.map((force) => {
						return <option value={force.id}>{force.name}</option>;
					})}
				</select>
			</div>
		);
	}

	handleChange = (e) => {
		console.log(e.target.value);
		this.props.setForce(e.target.value);
	};
	componentDidMount = () => {
		api.fetchForces().then(({ data }) => {
			this.setState({
				forces: data
			});
		});
	};
}
export default Selectarea;
