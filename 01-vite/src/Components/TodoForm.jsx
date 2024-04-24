import { useState } from 'react';
import PropTypes from 'prop-types';

export const TodoForm = ({ addTodo }) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length > 0) {
            addTodo({
                id: new Date().getTime(),
                description: inputValue,
                done: false
            });
            setInputValue('');
        }
    }

    return (
        <div className="col-5">
            <h4> Agregar TODO </h4>
            <hr />
            <form onSubmit={handleSubmit}>
                <input type="text" className="form-control" value={inputValue} onChange={handleInputChange} />
                <button className="btn btn-outline-primary mt-1">
                    Agregar
                </button>
            </form>
        </div>
    )
}

TodoForm.propTypes = {
    addTodo: PropTypes.func.isRequired
}