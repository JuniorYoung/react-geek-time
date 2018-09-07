import { ADD_TODO, TOGGLE_TODO } from '../actions/index';

/**
 * 更新 state 中的todos
 * @param {*} state 
 * @param {*} action 
 */
function todos(state = [], action) {
    switch(action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ];
        case TOGGLE_TODO:
            return state.map((todo) => todo.id === action.id ? {...todo, completed: !todo.completed} : todo
            );
        default:
            return state;
    }
}

export default todos;