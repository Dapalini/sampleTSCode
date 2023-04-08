// import { Greet } from './components/greet';
// import Person from './components/person';
// import PersonList from './components/personList';
// import Status from './components/status';
import './App.css';
// import Heading from './components/heading';
// import Oscar from './components/oscar';
// import Mybutton from "./components/Mybutton"
// import Input from './components/input';
// import Container from './components/container';
// import Loggin from './components/states/login';
// import Counter from './components/counter';
// import { Box } from './components/context/box';
// import { ThemeContextProvider } from './components/context/themeContext';
// import User from './components/context/user';
// import { UserContextProvider } from './components/context/userContext';
// import { List } from './components/generics/List';
// import { RandomNumber } from './components/restriction/randomNumber';
// import { Toast } from './components/templateLiterals/Toast';
// import { CustomButton } from './components/html/Button';
// import YoutubeForm from './LESSON1/YoutubeForm';
import FormikContainer from './components/formikContainer/formikContainer';


function App() {

  return <FormikContainer/>
  // const personName = {
  //   firstName: "Bruce",
  //   lastName: "Wayne"
  // }

  // const list = [
  //   { firstName: "Jack", lastName: "Sparrow"},
  //   { firstName: "Jim", lastName: "Meskinin"},
  //   { firstName: "Isaac", lastName: "Newton"}
  // ]

  // const appStatus = "loading"

  // const addUp = function<T = number,V = number>(a: T, b: V){
  //   return {...a,...b}
  // }

  // const value1 = addUp({a:"a",b:"b"},{c:1,d:2})

  // console.log(value1)

  // return (
  //   <div className="App">
  //     <CustomButton variant="primary"/>
  //     <RandomNumber value={10} isPositive />
  //     <Toast position="center" />
  //     <List items={["Batman", "Superman", "Wonder woman"]} onClick={ (item)=> console.log(item)}/>
  //     <List items={[1, 2, 3]} onClick={ (item)=> console.log(item)}/>
  //     <UserContextProvider>
  //       <User/>
  //     </UserContextProvider>
  //     <ThemeContextProvider>
  //       <Box />
  //     </ThemeContextProvider>
  //     <Counter/>
  //     <Loggin/>
  //     <Greet name="Daniel" isLoggedIn={true}/>
  //     <Person personName={personName}/>
  //     <PersonList personList={list}/>
  //     <br></br>
  //     <Status status={appStatus}/>
  //     <Oscar>
  //     <Heading>Helsemin</Heading>
  //     </Oscar>
  //     <Mybutton handleClick={(event, id) => console.log("Button clicked", event, id)}/>
  //     <Input value={"Hello world"} handleChange={event => console.log(event, event.target.value)}/>
  //     <Container style={{border: "1px solid red", borderRadius: "10px", padding: "1rem", maxWidth: "100px"}}/>
  //   </div>
  // )
}

export default App