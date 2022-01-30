const Light = (props) => {
	return (
		<>
			<div
				onClick={() => props.handler(props.color)}
				className={`${props.color} ${
					props.isOn ? "selected" : ""
				} light flex-fill`}></div>
		</>
	);
};

export default Light;
