type GreetProps = {
	name: string,
	messageCount?: number,
	isLoggedIn: boolean
}


export const Greet = (props: GreetProps) => {
	const {name, messageCount = 0, isLoggedIn} = props
	
	return (<div>
		<h2>
		{isLoggedIn ? 
		`Welcome ${name} to this app. You have ${messageCount} unsnaswered messages.` : 
		"Welcome Guest"
		}	
		</h2> 
</div>)
}