import { useSelector, useDispatch } from "react-redux";
import {increment} from '../redux/store'

export const App = () => {
  const numberOfClics = useSelector(state=>state.clics.value);
  const dispatch = useDispatch() 
  
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    ><button onClick={()=>dispatch(increment(6))}>{numberOfClics}</button>
      
    </div>
  );
};
