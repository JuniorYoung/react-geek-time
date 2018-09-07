import { SET_VISIBILITY_FILTER, VisibilityFilters } from '../actions/index';

/**
 * 更新 state 中的visibilityFilter
 * @param {*} state 
 * @param {*} action 
 */
function visibilityFilter(state = VisibilityFilters.SHOW_ALL, action) {
    switch(action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter;
        default:
            return state;
    }
}

export default visibilityFilter;