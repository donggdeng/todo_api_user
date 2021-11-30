import { Button, Grid, Paper, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

import React from 'react'
import axios from '../axios';
import { useRecoilState } from 'recoil';
import { todoListState } from '../atoms/todoListAtom';

const useStyles = makeStyles({
    paper: {
        padding: "2em",
        margin: "1em",
        textAlign: "justify"
    },
    heading: {
        textAlign: "center"
    },
    body: {
        padding: "1em"
    },
    divider: {
        width: "25%",
        margin: "1em"
    }
})

function TodoItem({id, task, body}) {

    const classes = useStyles();

    const [todoList, setTodoList] = useRecoilState(todoListState)

    const handleDelete = (e) => {
        axios.delete(`/todos/${id}`)
            .then(response => {
                setTodoList([...todoList].filter(item => item.id != id))
            })
    }

    return (
        <Grid container spacing={0}>
            <Grid item xs={1}></Grid>
            <Grid item xs={10}>
                <Paper elevation={10} className={classes.paper}>
                    <Typography variant="h4" className={classes.heading}>
                        {task}
                    </Typography>
                    <hr className={classes.divider} style={{marginLeft: "37.5%"}}/>
                    <div className={classes.body}>
                        <Typography variant="body1">
                            {body}
                        </Typography>
                    </div>
                    <hr className={classes.divider}/>
                    <Button
                        variant="contained"
                        color="secondary"
                        size="small"
                        startIcon={<DeleteOutlineOutlinedIcon />}
                        onClick={handleDelete}
                    >
                        Delete
                    </Button>
                </Paper>
            </Grid>
        </Grid>
    )
}

export default TodoItem