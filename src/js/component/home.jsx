import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { TrafficLight } from "./TrafficLight";
import '/workspaces/is-stefano_TrafficLightProject/src/styles/index.css';



//create your first component
const Home = () => {
	return (
		<TrafficLight/>
	);
};

export default Home;
