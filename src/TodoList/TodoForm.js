import { Button, Grid, TextField } from '@mui/material'
import axios from '../axios';
import React, {useState} from 'react'
import { useRecoilState } from 'recoil'
import { todoListState } from '../atoms/todoListAtom';
import TextareaAutosize from '@mui/base/TextareaAutosize';


function TodoForm() {
    const defaultTaskValue = ""
    const defaultBodyValue = ""

    const [todoList, setTodoList] = useRecoilState(todoListState);
    const [task, setTask] = useState(defaultTaskValue);
    const [body, setBody] = useState(defaultBodyValue);

    const handleSubmit = async (e) => {
        e.preventDefault()

        const data = new FormData(e.target)

        await axios.post("/todos", data)
        .then(response => {
            setTodoList([response.data, ...todoList])
            setTask(defaultTaskValue)
            setBody(defaultBodyValue)
        })
    }

    const handleTaskChange = (e) => {
        e.preventDefault()

        setTask(e.target.value)
    }

    const handleBodyChange = (e) => {
        e.preventDefault()
        setBody(e.target.value)
    }

    return (
        <form onSubmit={handleSubmit} autoComplete="off">
            <Grid container alignItems="flex-end">
                <Grid item xs={1}></Grid>
                <Grid item xs={10}>
                    <Grid container spacing={2}>
                        
                    <Grid item xs={12}>
                        <TextField
                            fullWidth 
                            id="task_input"
                            label="Task Description"
                            variant="outlined"
                            type="text"
                            name="todo[task]"
                            value={task}
                            onChange={handleTaskChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextareaAutosize
                            id="body_input"
                            label="Task Body"
                            variant="outlined"
                            type="text"
                            style={{width: "98%", borderRadius: "5px", fontSize: "1.15em", padding: "1%"}}
                            minRows={3}
                            placeholder="Describe your todo item..."
                            value={body}
                            onChange={handleBodyChange}
                            name="todo[body]"
                        />
                    </Grid>
                    <Grid item xs={2}>
                        <Button 
                            variant="contained"
                            color="primary"
                            type="submit"
                            style={{height: "100%"}}
                        >ADD TASK</Button>
                    </Grid>
                    </Grid>
                </Grid>
                
            </Grid>
        </form>
    )
}

export default TodoForm
