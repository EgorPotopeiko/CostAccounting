import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import InfoMenu from './InfoMenu';
import HistoryButtonPlus from './HistoryButtons/HistoryButtonPlus';
import HistoryButtonMinus from './HistoryButtons/HistoryButtonMinus';
import CardMenu from './Card';
import RenderOperation from './AddHistoryElement';

const useStyles = makeStyles({
  title: {
    fontSize: 30,
    paddingTop: 20,
  },
});

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <Typography className={classes.title}>Калькулятор расходов</Typography>
        <Container maxWidth="sm">
          <InfoMenu />
          <Typography className={classes.title}>История расходов</Typography>
          <ul className="ButtonsList">
          <HistoryButtonPlus />
          <HistoryButtonMinus />
          </ul>
          <CardMenu />
          </Container>
    </div>
  );
}

export default App;
