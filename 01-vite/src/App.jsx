import { useDispatch, useSelector } from 'react-redux';
import './App.css'
import { increment, incrementBy, decrement } from './store/counterSlice';

const App = () => {
  const { counter } = useSelector(state => state.counter)
  const dispatch = useDispatch()

  return (
    <>
      <h1>App</h1>
      <hr />
      <span> Counter is: {counter} </span>
      <button
        className='btn btn-primary'
        onClick={() => dispatch(increment())}>+1</button>
      <button
        className='btn btn-primary'
        onClick={() => dispatch(incrementBy(5))}>+5</button>
      <button
        className='btn btn-primary'
        onClick={() => dispatch(decrement())}>-1</button>
    </>
  )
}

export default App;