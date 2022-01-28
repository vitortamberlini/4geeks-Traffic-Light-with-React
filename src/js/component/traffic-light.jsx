import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const TrafficLight = () => {
	return (
		<>
			<Container className="d-flex flex-column align-items-center">
				<Row id="handle">
					<Col className="traffic-color"></Col>
				</Row>
				<Row id="traffic-box">
					<Col className="traffic-color rounded"></Col>
				</Row>
			</Container>
		</>
	);
};

export default TrafficLight;
