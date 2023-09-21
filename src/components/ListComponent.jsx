import React, { Component } from "react";
import { Icon } from "leaflet";

class ListComponent extends Component {

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


		const quakeList = this.props.quakes.map(quake => {
			const position = [quake.position[1], quake.position[0]];    // react-leaflet coordinate position format is [lat, lng]

			let timesection;
			if (this.props.filterTimeFormat === "gmt") {
				timesection = <span className="li-time">{new Date(quake.time).toUTCString()}</span>
			} else if (this.props.filterTimeFormat === "local") {
				timesection = <span className="li-time">{new Date(quake.time).toString()}</span>
			}

			if (quake.magnitude >= 6) {
				return (
					<li key={quake.id} position={position} icon={customIconRed} className="quake-list-li">
							
							
							<div className="popup__quake_description">
							<span className="quake-li-red"><b>SEVERE: </b> {quake.magnitude} magnitude earthquake.</span> &emsp;&emsp;&emsp; <i>Near {quake.place}.</i>  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
	            Find more details <a href={quake.url} className="quake-list-link">here</a> <br /><br />{timesection}
						</div>
						
						
					</li>
				);
			} else if (quake.magnitude >= 4 && quake.magnitude < 6) {
				return (
					<li key={quake.id} position={position} icon={customIconOrange} className="quake-list-li">
							
							
							<div className="popup__quake_description">
							<span className="quake-li-orange"><b>Moderate: </b> {quake.magnitude} magnitude earthquake.</span> &emsp;&emsp;&emsp; <i>Near {quake.place}.</i>  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
	            Find more details <a href={quake.url} className="quake-list-link">here</a> <br /><br />{timesection}
						</div>
						
						
					</li>
				);
			} else {
				return (
					<li key={quake.id} position={position} className="quake-list-li">
							
							
							<div className="popup__quake_description">
							<span className="quake-li-blue"><b>Weak: </b> {quake.magnitude} magnitude earthquake.</span> &emsp;&emsp;&emsp; <i>Near {quake.place}.</i>  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
	              Find more details <a href={quake.url} className="quake-list-link">here</a> <br /><br />{timesection}
						</div>
						
						
					</li>
				);
			}
        })


		return (
			<ul className="quake-list">
				{quakeList}
			</ul>
		);
	}
}

export default ListComponent;