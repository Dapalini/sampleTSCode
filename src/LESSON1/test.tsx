import * as React from 'react';
import { useReducer, createContext, useContext} from 'react';
import { ReactElement } from 'react';


type CountNumber = number

type ReducerActionType = {
  type: string,
  payload?: any
}

type UseCountContextType = {
  state: CountNumber,
  increaseNumber: () => void
  decreaseNumber: () => void
}

export const initialCount: CountNumber = 1

const countReducer = (state: CountNumber, action: ReducerActionType) => {
  const {type, payload} = action
  switch (type) {
    case "INCREASE_COUNT":
      let increaseCount: CountNumber
      increaseCount = payload + 1
      return increaseCount
    case "DECREASE_COUNT":
      let decreaseCount: CountNumber
      decreaseCount = payload - 1
      return decreaseCount
    default:
      throw new Error("Count not executed")
  }
}

export const useCountContext = (initialCount: CountNumber) => {
  const [state, dispatch] = useReducer(countReducer, initialCount)
  const increaseNumber = () => {
    dispatch({type: "INCREASE_COUNT", payload: state})
  }
  
  const decreaseNumber = () => {
    dispatch({type: "DECREASE_COUNT", payload: state})
  }
  return {state, increaseNumber,decreaseNumber}
}

const initCountContext: UseCountContextType = {
  state: initialCount,
  increaseNumber: () => {},
  decreaseNumber: () => {}
}

type Children = {
  children?: ReactElement | undefined
}

const CountContext = createContext<UseCountContextType>(initCountContext)

export const CountContextProvider = ({ children }: Children): ReactElement => {

  return (
    <CountContext.Provider value={useCountContext(initialCount)}>{children}</CountContext.Provider>
  )
} 

export const useCount = (): UseCountContextType => {
  const {state, increaseNumber, decreaseNumber} = useContext(CountContext)
  return {state, increaseNumber, decreaseNumber}
}

