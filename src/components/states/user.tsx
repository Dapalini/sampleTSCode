import { useState } from "react";
import { Names } from "../personTypes";

type AuthUser = {
	name: string,
	email: string
}

const User = () => {
	const [user, setUser] = useState<null | AuthUser>(null)

	const handleLogIn = () => {setUser({
		name: "Daniel Palini",
		email: "daniel@example.com"
	})}
	const handleLogOut = () => {setUser(null)}

	return ( <div>
		<button onClick={handleLogIn}>Login</button>
		<button onClick={handleLogOut}>Logout</button>
		<div> Users name is {`${user !== null? user?.name : "logged out"}`}</div>
		<div> Users email address is {`${user !== null ? user?.email : "logged out"}`}</div>
	</div> );
}
 
export default User;