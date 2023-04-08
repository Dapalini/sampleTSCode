type OscarProps = {
	children: React.ReactNode
}

const Oscar = (props: OscarProps) => {
	const {children} = props
	return ( <div>{children}</div> );
}
 
export default Oscar;