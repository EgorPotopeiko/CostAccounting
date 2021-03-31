import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    inputfields: {
      display: 'grid',
    },
    inputtitle: {
      fontSize: 30,
      paddingBottom: 20,
    },
    nameinput: {
      backgroundColor: 'white',
      borderRadius: 20,
    },
    moneyinput: {
      marginTop: 20,
      borderRadius: 20,
      backgroundColor: 'white',
    },
    addBtn: {
      marginTop: 20,
      backgroundColor: '#FF8C00',
      color: 'white',
      borderRadius: 10,
      '&:hover': {
        backgroundColor: '#FF4500',
      },
    },
    CardAdd: {
      backgroundColor: '#ddd',
      borderRadius: 20,
    },
  });

  const CardMenu = () => {
    const classes = useStyles();
      return (
        <Card className={classes.CardAdd}>
        <CardContent>
        <Typography className={classes.inputtitle}>Новая операция</Typography>
        <div className={classes.inputfields}>
        <TextField className={classes.nameinput} id="outlined-basic" label="Наименование операции" variant="outlined" />
        <TextField className={classes.moneyinput}
          id="outlined-adornment-amount"
          variant="outlined"
          label="Amount"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        </div>
        <Button className={classes.addBtn} variant="contained" disableElevation>
          Добавить операцию
        </Button>
        </CardContent>
        </Card>
      )
  }

  export default CardMenu;