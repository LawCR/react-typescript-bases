
// por si necesitas crear los types
// const action = {
//     counterReset: 'reset',
//     counterIncreaseBy: 'increaseBy'
// }

export type CounterAction = 
    | { type: 'increaseBy', payload: {value: number} }
    | { type: 'reset' }
// | { type: action.counterReset, payload: {value: number} }

// Las action tienen mayormente el do como prefijo y devuelve la action type y payload si es que necesita
export const doReset = ():CounterAction => ({type: 'reset'})

export const doIncreaseBy = (value: number):CounterAction => ({
    type: 'increaseBy',
    payload: {value}
})