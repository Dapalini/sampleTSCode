import { useReducer } from "react";

type CounterState = {
	count: number
}


type UpdateCounter = {
	type: "increment" | "decrement",
	payload: number
}

type ResetCounter = {
	type: "reset"
}

type CounterAction = UpdateCounter | ResetCounter

const initialState = {count: 0}


function reducer(state: CounterState,action: CounterAction) {
 	switch (action.type) {

		 case "increment":
			 	return { count: state.count + action.payload}
		 case "decrement":
			 	return { count: state.count - action.payload  }
		 case "reset":
			 	return initialState
			default:
				return state
	}
}

const Counter = () => {

	const[state,dispatch] = useReducer(reducer, initialState)

	return ( <>
	<p>The count is: {state.count}</p>
	<button onClick={() => dispatch({type: "decrement", payload: 10})}>Decrement 10</button>
	<button onClick={() => dispatch({type: "increment", payload: 10})}>Increment 10</button>
	<br/>
	<button onClick={() => dispatch({type: "reset" })}>Reset</button>
	</> );
}
 
export default Counter;