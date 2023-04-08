import { Names } from "./personTypes";

type PersonListProps = {
	personList: Names[]

}

const PersonList = (props: PersonListProps) => {
	const {personList} = props
	return ( <div>
		{personList.map(person => (<h2 key={person.firstName}>{`${person.firstName + " " + person.lastName}`}</h2>))}
	</div> );
}
 
export default PersonList;