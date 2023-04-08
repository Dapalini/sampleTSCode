type StatusProps = {
	status: "loading" | "processing" | "ready" | "error" 
}

const Status = (props: StatusProps) => {
	const {status} = props
	
	let message: string;
	if (status === "loading"){
		message = "Loading..."
	} else if (status === "processing") {
		message = "Processing..."
	} else if (status === "ready"){
		message = "Ready"
	} else if (status === "error"){
		message = "There is an error"
	} else {
		message = "No message"
	}
	
	return ( 
		<div>
			<h2>{message}</h2>
		</div>
	 );
}
 
export default Status;