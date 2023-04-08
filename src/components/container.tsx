type ContainerProps = {
	style: React.CSSProperties
}

const Container = (props: ContainerProps) => {
	const {style} = props

	return ( <div style={style}>
		This is some text
	</div> );
}
 
export default Container;