import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import Character from "./character.jsx";
import Planet from "./planet.jsx";
import Vehicle from "./vehicle.jsx";


export const Home = () => {
	return (<div className="text-center mt-5">
		<div className="row">
			<div className="row">
				<h1>Characters</h1>
				< Character />
			</div>
			<div className="row">
				<h1>Planets</h1>
				< Planet />
			</div>
			<div className="row">
				<h1>Starships</h1>
				< Vehicle />
			</div>
			</div>
		</div> )
};