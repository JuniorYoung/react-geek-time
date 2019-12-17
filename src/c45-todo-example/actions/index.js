/**
 * 设置Action类型
 */
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

/**
 * 每一个todo的标识
 */
let nextNodeId = 0;

/**
 * 设置todos的展示类型
 */
export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_ACTIVE: 'SHOW_ACTIVE',
    SHOW_COMPLETED: 'SHOW_COMPLETED'
};

/**
 * 设置Action Creators
 */
export function addTodo(text) {
    return {
        type: ADD_TODO,
        id: nextNodeId++,
        text
    };
}
export function toggleTodo(id) {
    return {
        type: TOGGLE_TODO,
        id
    };
}
export function setVisibilityFilter(filter) {
    return {
        type: SET_VISIBILITY_FILTER,
        filter
    };
}