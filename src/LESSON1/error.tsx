import * as React from 'react';

const Error = (props: any) => {
  return ( 
  <div style={{color: "#ff6666"}}>
    {props.children}
  </div> );
}
 
export default Error;