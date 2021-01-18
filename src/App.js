import './App.css';
import {useSelector, useDispatch} from 'react-redux'
import { increment, decrement, reset, incrementBy } from './actions'

function App() {
  const counter = useSelector(state => state.counter)
  const isLogged = useSelector(state => state.isLogged)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(incrementBy())}>Increment by 5</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      {isLogged ? <h3>Info: {isLogged}</h3> : ''}
    </div>
  );
}

export default App;
