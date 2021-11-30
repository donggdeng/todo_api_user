import axios from '../axios'
import React, { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { todoListState } from '../atoms/todoListAtom'
import TodoForm from './TodoForm'
import TodoItem from './TodoItem'
import { Grid } from '@mui/material'

function TodoList() {
    const [todoList, setTodoList] = useRecoilState(todoListState)

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get("/todos");
            setTodoList(response.data);
        }

        fetchData();
    }, [setTodoList])

    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <TodoForm />
            </Grid>
            
            <Grid item xs={12} id="todo_list">
                {todoList.map((todo) => (
                    <TodoItem key={todo.id} id={todo.id} task={todo.task} body={todo.body}/>
                ))}
            </Grid>
        </Grid>
    )
}

export default TodoList
