import { useTodo } from './UseTodo';
import { TodoList } from './TodoList';
import { TodoForm } from './TodoForm';

export const TodoApp = () => {
    const { todos, addTodo, deleteTodo, toggleTodo, countTodos, countPendingTodos } = useTodo();

    return (
        <>
            <h1>TodoApp: {countTodos}, <small> Pendientes: {countPendingTodos} </small></h1>
            <hr />

            <div className="row">
                <TodoList todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
                <TodoForm addTodo={addTodo} />
            </div>
        </>
    )
}