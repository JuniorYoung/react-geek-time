import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/index';

const AddTodo = ({ dispatch }) => {
    let inputText;

    return (
        <div>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    if(!inputText.value.trim()) {
                        return;
                    }
                    dispatch(addTodo(inputText.value));
                    inputText.value = '';
                }}
            >
                <input ref={(node) => inputText = node} />
                <button type="submit">
                    Add Todo
                </button>
            </form>
        </div>
    );
};

export default connect()(AddTodo);