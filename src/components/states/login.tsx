import { useState } from "react";

const Loggin = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false)


	const handleLogIn = () => {setIsLoggedIn(true)}
	const handleLogOut = () => {setIsLoggedIn(false)}
	return ( <div>
		<button onClick={handleLogIn}>Login</button>
		<button onClick={handleLogOut}>Logout</button>
		<div> User is {`${isLoggedIn ? "logged in" : "logged out"}`}</div>
	</div> );
}
 
export default Loggin;