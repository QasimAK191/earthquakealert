import React, { Component } from "react";
import { Map, TileLayer, Marker, Popup, AttributionControl } from 'react-leaflet';
import { Icon } from "leaflet";

class MapComponent extends Component {

	render() {

		const customIconRed = new Icon({
			iconUrl: require('../assets/marker-icon-2x-red.png'),     // red-marker for severe alert
			shadowUrl: require('../assets/marker-shadow.png'),
			iconSize: [25, 41],
			iconAnchor: [12, 41],
			popupAnchor: [1, -34],
			shadowSize: [41, 41]
		});

		const customIconOrange = new Icon({
			iconUrl: require('../assets/marker-icon-2x-orange.png'),     // orange-marker for moderate alert
			shadowUrl: require('../assets/marker-shadow.png'),
			iconSize: [25, 41],
			iconAnchor: [12, 41],
			popupAnchor: [1, -34],
			shadowSize: [41, 41]
		});

		const quakeFeaturesMarker = this.props.quakes.map(quake => {
			const position = [quake.position[1], quake.position[0]];    // react-leaflet coordinate position format is [lat, lng]

			let timesection;
			if (this.props.filterTimeFormat === "gmt") {
				timesection = <span className="popup__quaketime_gmt">{new Date(quake.time).toUTCString()}</span>
			} else if (this.props.filterTimeFormat === "local") {
				timesection = <span className="popup__quaketime_local">{new Date(quake.time).toString()}</span>
			}

			if (quake.magnitude >= 6) {
				return (
					<Marker key={quake.id} position={position} icon={customIconRed}>
						<Popup>
							{timesection}
							<br />
							<div className="popup__quake_description">
								<span className="quake__magnitude__red">{quake.magnitude}</span> magnitude earthquake. Near {quake.place}.
	            Find more details <a href={quake.url}>here</a>
							</div>
						</Popup>
					</Marker>
				);
			} else if (quake.magnitude >= 4 && quake.magnitude < 6) {
				return (
					<Marker key={quake.id} position={position} icon={customIconOrange}>
						<Popup>
							{timesection}
							<br />
							<div className="popup__quake_description">
								<span className="quake__magnitude__orange">{quake.magnitude}</span> magnitude earthquake. Near {quake.place}.
	            Find more details <a href={quake.url}>here</a>
							</div>
						</Popup>
					</Marker>
				);
			} else {
				return (
					<Marker key={quake.id} position={position} >
						<Popup>
							{timesection}
							<br />
							<div className="popup__quake_description">
								<span className="quake__magnitude">{quake.magnitude}</span> magnitude earthquake. Near {quake.place}.
	              Find more details <a href={quake.url}>here</a>
							</div>
						</Popup>
					</Marker>
				);
			}
		});


		return (
			<Map
				className="map__section"
				center={[38, 6]}
				zoom={3}
				minZoom="1.5"
				maxBounds={[
					[90, 180],
					[-90, -180],
				]}
				scrollWheelZoom={false}
				attributionControl={false}
			>
				<TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

				{quakeFeaturesMarker}
			</Map >
		);
	}
}

export default MapComponent;