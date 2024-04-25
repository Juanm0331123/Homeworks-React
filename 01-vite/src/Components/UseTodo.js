import { useReducer, useEffect } from 'react';
import { TodoReducer } from './TodoReducer';

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodo = (initialState = []) => {
    const [todos, dispatch] = useReducer(TodoReducer, initialState, init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const addTodo = (todo) => {
        dispatch({ type: 'add', payload: todo });
    }

    const deleteTodo = (todoId) => {
        dispatch({ type: 'delete', payload: todoId });
    }

    const toggleTodo = (todoId) => {
        dispatch({ type: 'toggle', payload: todoId });
    }

    const countTodos = todos.length;
    const countPendingTodos = todos.filter(todo => !todo.done).length;

    return { todos, addTodo, deleteTodo, toggleTodo, countTodos, countPendingTodos };
}