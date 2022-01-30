import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Light from "./light.jsx";
import { useState } from "react";

const TrafficLight = () => {
	const [lights, setLights] = useState({
		red: false,
		yellow: false,
		green: false,
	});

	function turnOn(color) {
		const newLights = {
			red: false,
			yellow: false,
			green: true,
		};

		Object.keys(lights).map((key) =>
			color === key ? (newLights[key] = true) : (newLights[key] = false)
		);

		setLights(newLights);
	}

	return (
		<>
			<Container className="d-flex flex-column align-items-center">
				<Row id="handle">
					<Col className="traffic-color"></Col>
				</Row>
				<Row id="traffic-box">
					<Col className="py-3 d-flex flex-column align-items-center traffic-color">
						<Light color="red" isOn={lights.red} handler={turnOn} />
						<Light
							color="yellow"
							isOn={lights.yellow}
							handler={turnOn}
						/>
						<Light
							color="green"
							isOn={lights.green}
							handler={turnOn}
						/>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default TrafficLight;
