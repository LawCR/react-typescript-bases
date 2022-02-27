import { useReducer } from 'react'

interface CounterState {
    counter:  number,
    previous: number,
    changes:  number,
}

const INITIAL_STATE: CounterState = {
    counter: 0,
    previous: 0,
    changes: 0,
}

type CounterAction = 
    | { type: 'increaseBy', payload: {value: number} }
    | { type: 'reset' }

// Nuestro reducer, creamos interface para el state y un type para los action
const counterReducer = (state: CounterState, action: CounterAction): CounterState => {
    switch (action.type) {
        case "increaseBy":
            return {
                ...state,
                counter: state.counter + action.payload.value,
                previous: state.counter,
                changes: state.changes + 1,

            }
        case 'reset':
            return {
                counter: 0,
                changes: 0,
                previous: 0
            }
        default:
            return state;
    }
}

const CounterReducerComponent = () => {
    
    const [{counter, previous, changes}, dispatch] = useReducer(counterReducer, INITIAL_STATE)

    const handleClickReset = () => {
        dispatch({
            type: 'reset'
        })
    }

    const handleClick = (value: number) => {
        dispatch({
            type: 'increaseBy',
            payload: {value}
        })
    }

    return (
    <>
        <h1>Counter Reducer: {counter} </h1>
        <h1>Counter Previous: {previous} </h1>
        <h1>Counter Changes: {changes} </h1>
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