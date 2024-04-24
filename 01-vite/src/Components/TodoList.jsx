import { TodoItem } from './TodoItem'
import PropTypes from 'prop-types';

export const TodoList = ({ todos }) => {
    return (
        <div className="col-7">
            <ul className="list-group">
                {todos.map(todo => <TodoItem key={todo.id} todo={todo} />)}
            </ul>
        </div>
    )
}

TodoList.propTypes = {
    todos: PropTypes.array.isRequired
}