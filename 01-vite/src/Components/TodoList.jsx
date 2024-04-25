import { TodoItem } from './TodoItem'
import PropTypes from 'prop-types';

export const TodoList = ({ todos, deleteTodo, toggleTodo }) => {
    return (
        <ul>
            {todos.map(todo => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    deleteTodo={deleteTodo}
                    toggleTodo={toggleTodo}
                />
            ))}
        </ul>
    )
}

TodoList.propTypes = {
    todos: PropTypes.array.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    toggleTodo: PropTypes.func.isRequired
}