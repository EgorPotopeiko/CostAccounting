import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import InfoMenu from './InfoMenu';
import CardMenu from './Card';
import HistoryButton from './AddHistoryElement';
import React, {useState} from "react";

const useStyles = makeStyles({
  title: {
    fontSize: 30,
    paddingTop: 20,
  },
});


function App() {
  const classes = useStyles();
  const [data, setData] = useState([]);
  return (
    <div className="App">
      <Typography className={classes.title}>Калькулятор расходов</Typography>
        <Container maxWidth="sm">
          <InfoMenu data={data} />
          <Typography className={classes.title}>История расходов</Typography>
          <ul className="ButtonsList">
          <HistoryButton data={data} setData={setData}/>
          </ul>
          <CardMenu data={data} setData={setData}/>
          </Container>
    </div>
  );
}

export default App;
