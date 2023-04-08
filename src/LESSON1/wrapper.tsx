import Counter from './counter';
import { CountContextProvider } from './test';

const Wrapper = () => {
  return ( 
    <>
    <CountContextProvider>
      <Counter></Counter>
    </CountContextProvider>
    </>
   );
}
 
export default Wrapper;