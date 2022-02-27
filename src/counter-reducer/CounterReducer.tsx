import { useReducer } from 'react'
import { CounterState } from './interfaces/interfaces'
import { counterReducer } from './reducers/counterReducer'
// import { doReset, doIncreaseBy } from './actions/actions';
import * as actions from './actions/actions';


const INITIAL_STATE: CounterState = {
    counter: 0,
    previous: 0,
    changes: 0,
}

const CounterReducerComponent = () => {
    
    const [{counter, previous, changes}, dispatch] = useReducer(counterReducer, INITIAL_STATE)

    const handleClickReset = () => {
        dispatch(actions.doReset())
    }

    const handleClick = (value: number) => {
        dispatch(actions.doIncreaseBy(value))
    }

    return (
    <>
        <h1>Counter Reducer Segmentado</h1>
        <h2>Counter State: {counter} </h2>
        <h2>Counter Previous: {previous} </h2>
        <h2>Counter Changes: {changes} </h2>
        <button onClick={() => handleClick(1)}>
            +1
        </button>
        <button onClick={() => handleClick(5)}>
            +5
        </button>
        <button onClick={() => handleClick(10)}>
            +10
        </button>
        <button onClick={handleClickReset}>
            Reset
        </button>
    </>
    )
}

export default CounterReducerComponent