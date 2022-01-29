import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Light from "./light.jsx";

const TrafficLight = () => {
	return (
		<>
			<Container className="d-flex flex-column align-items-center">
				<Row id="handle">
					<Col className="traffic-color"></Col>
				</Row>
				<Row id="traffic-box">
					<Col className="py-3 d-flex flex-column align-items-center traffic-color">
						<Light color="red" />
						<Light color="yellow" />
						<Light color="green" />
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default TrafficLight;
