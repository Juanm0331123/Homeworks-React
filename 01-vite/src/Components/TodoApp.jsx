import { useEffect, useReducer } from "react";
import { TodoReducer } from "./TodoReducer";
import { TodoList } from './TodoList';
import { TodoForm } from './TodoForm';

const inisialState = [{
    id: new Date().getTime(),
    description: 'Hacer los challenge',
    done: false
}]

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];

}

export const TodoApp = () => {
    const [todos, dispatchTodo] = useReducer(TodoReducer, inisialState)

    const addTodo = (todo) => {
        dispatchTodo({ type: 'add', payload: todo });
    }

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    return (
        <>
            <h1>TodoApp: 10, <small> Pendientes: 2 </small></h1>
            <hr />

            <div className="row">
                <TodoList todos={todos} />
                <TodoForm addTodo={addTodo} />
            </div>
        </>
    )
}