import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


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

const InfoMenu = () => {
    const classes = useStyles();
    return (
        <Card className={classes.cards}>
            <CardContent>
              <div className={classes.cardtitle}>
                <Typography className={classes.textcard}>Баланс</Typography>
                <Typography className={classes.textcard}>0 ₽</Typography>
              </div>
              <div className={classes.cardtotal}>
                <div className={classes.cardrevenue}>
                <Typography className={classes.textcard}>Доходы</Typography>
                <Typography className={classes.sumrevenue}>+0 ₽</Typography>
              </div>
              <div className={classes.cardexpenses}>
                <Typography className={classes.textcard}>Расходы</Typography>
                <Typography className={classes.sumexpenses}>-0 ₽</Typography>
              </div>
              </div>
            </CardContent>
          </Card>
    )
}
export default InfoMenu;