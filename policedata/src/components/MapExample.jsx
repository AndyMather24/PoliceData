import React from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
const startPosition = [ 53.483522, -2.187197 ];
const MapExample = (props) => {
	return (
		<Map className="mapid" center={startPosition} zoom={13}>
			<TileLayer
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
			/>
			{props.searchData.map((search) => {
				if (search.location != null) {
					let position = [ +search.location.latitude, +search.location.longitude ];
					return (
						<Marker position={position}>
							<Popup>
								<ul>
									<li> Ethnicity: {search.legislation} </li>
									<li> Ethnicity: {search.self_defined_ethnicity} </li>
									<li>age: {search.age_range}</li>
									<li>Gender: {search.gender}</li>
									<li>Reason: {search.object_of_search}</li>
									<li>outcome: {search.outcome}</li>
								</ul>
							</Popup>
						</Marker>
					);
				}
			})}
		</Map>
	);
};

export default MapExample;
