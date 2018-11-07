import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';

const data = {
	labels: [ 'Red', 'Green', 'Yellow' ],
	datasets: [
		{
			data: [ 300, 50, 100 ],
			backgroundColor: [ '#FF6384', '#36A2EB', '#FFCE56' ],
			hoverBackgroundColor: [ '#FF6384', '#36A2EB', '#FFCE56' ]
		}
	]
};

class Chart extends Component {
	render() {
		return (
			<div>
				<h2>Doughnut Example</h2>
				<Doughnut data={data} />
			</div>
		);
	}

	labelsTally = () => {
		const labelst = this.props.searches.reduce((acc, search) => {
			return acc.push(search.self_defined_ethnicity);
		}, []);
		console.log(labelst);
		return labelst;
	};

	componentDidMount = () => {
		this.labelsTally();
	};
}

export default Chart;
