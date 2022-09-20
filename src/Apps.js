import React from "react";
import howManyParks from "./parks/howManyParks";
import ColoradoStateParks from "./ColoradoStateParks";
import MesaVerde from "./parks/MesaVerde";
import { Trees, Wildlife } from "./parks/RockyMountain";

function Apps() {
	return (
		<div>
			<h2>There are {howManyParks()} in total</h2>
			<h2>Some of the parks known are</h2>
			<p>
				<ul>
					<li>{ColoradoStateParks()}</li>
					<li>{MesaVerde()}</li>
				</ul>
			</p>
			<p>
				Some of the outstanding features of the park is that it has {Trees} and
				also has {Wildlife()}
			</p>
		</div>
	);
}

export default Apps;
