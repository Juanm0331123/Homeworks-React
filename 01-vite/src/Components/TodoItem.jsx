import PropTypes from 'prop-types';

export const TodoItem = ({ todo, deleteTodo, toggleTodo }) => {
    return (
        <li key={todo.id}>
            <span
                className="todo-text" // Añade la clase aquí
                onClick={() => toggleTodo(todo.id)}
                style={{ textDecoration: todo.done ? 'line-through' : 'none' }}
            >
                {todo.name}
            </span>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </li>
    )
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    toggleTodo: PropTypes.func.isRequired
}