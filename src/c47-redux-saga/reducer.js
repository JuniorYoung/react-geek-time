export default function counter(state = 0, action) {
    console.log(action);
    switch(action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        case 'INCREMENT_IF_ODD':
            return (state % 2 !== 0) ? state + 1 : state;
        default:
            return state;
    }
}