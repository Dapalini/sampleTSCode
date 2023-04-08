import { useContext } from "react";
import { UserContext } from "./userContext";


const User = () => {
	const userContext = useContext(UserContext)

	const handleLogIn = () => {
			userContext.setUser({
				name: "Daniel",
				email: "daniel@gmail.com"})
		}

	const handleLogOut = () => {
			userContext.setUser(null)
		}

	return ( <div>
		<button onClick={handleLogIn}>Login</button>
		<button onClick={handleLogOut}>Logout</button>
		<div> Users name is {userContext.user?.name}</div>
		<div> Users email address is {userContext.user?.email}</div>
	</div> );
}
 
export default User;