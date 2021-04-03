import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {useEffect, useState} from "react";


const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    cards: {
      marginTop: 20,
      backgroundColor: '#fff',
      border: '1px solid #ccc',
      borderRadius: 25,
    },
    cardtitle: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    cardtotal: {
      marginTop: 15,
      display: 'flex',
      justifyContent: 'space-between',
    },
    cardrevenue: {
      maxWidth: 260,
      width: '100%',
      borderTop: '1px solid black',
      borderRight: '1px solid black',
    },
    cardexpenses: {
      maxWidth: 260,
      width: '100%',
      borderTop: '1px solid black',
    },
    textcard: {
      fontSize: 24,
    },
    sumrevenue: {
      fontSize: 24,
      fontWeight: 'bold',
      color: 'darkgreen',
    },
    sumexpenses: {
      fontSize: 24,
      fontWeight: 'bold',
      color: 'tomato',
    },
  });

const InfoMenu = ({data}) => {
  const [income, setIncome] = useState(0);
  const [spend, setSpend] = useState(0);
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    let inc = 0;
    let spd = 0;
    let bal = 0;
    data.forEach(el => {
      if(el.amount[0] === "-") {
        spd += +el.amount;
        bal += +el.amount;
      } else {
        inc += +el.amount;
        bal += +el.amount;
      }
      
    });
    setIncome(inc);
    setSpend(spd);
    setBalance(bal);
  }, [data])
    const classes = useStyles();
    return (
        <Card className={classes.cards}>
            <CardContent>
              <div className={classes.cardtitle}>
                <Typography className={classes.textcard}>Баланс</Typography>
                <Typography className={classes.textcard}>{balance} ₽</Typography>
              </div>
              <div className={classes.cardtotal}>
                <div className={classes.cardrevenue}>
                <Typography className={classes.textcard}>Доходы</Typography>
                <Typography className={classes.sumrevenue}>+{income} ₽</Typography>
              </div>
              <div className={classes.cardexpenses}>
                <Typography className={classes.textcard}>Расходы</Typography>
                <Typography className={classes.sumexpenses}>{spend} ₽</Typography>
              </div>
              </div>
            </CardContent>
          </Card>
    )
}
export default InfoMenu;