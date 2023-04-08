import * as React from 'react';

const TextError = (props: any) => {
  return ( 
  <div style={{color: "#ff6666"}}>
    {props.children}
  </div> );
}
 
export default TextError;