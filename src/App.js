import './App.css';
import TodoList from './TodoList/TodoList';
import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  app_title: {
    textAlign: "center"
  },

  title_divider: {
    marginBottom: "2em"
  }
})

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <header className="App-header">        
        <Typography variant="h1" className={classes.app_title}>Todo Stream</Typography>
        <hr className={classes.title_divider}/>
        <TodoList />
      </header>
    </div>
  );
}

export default App;
