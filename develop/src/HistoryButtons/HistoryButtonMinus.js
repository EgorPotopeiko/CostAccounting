import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles({
    expenseslist: {
      alignItems: 'center',
      backgroundColor: '#fff',
      borderTop: '1px solid black',
      borderBottom: '1px solid black',
      borderLeft: '10px solid tomato',
      borderRight: '10px solid tomato',
      borderRadius: 10,
      color: '333',
      display: 'flex',
      justifyContent: 'space-between',
      padding: 10,
      margin: '10px 0',
      lineHeight: 25,
      marginTop: 20,
    },
    expensesreason: {
      maxWidth: 150,
    },
    expensesnumber: { 
      maxWidth: 70,
      paddingRight: 30,
    },
  });

  const HistoryButtonMinus = () => {
    const classes = useStyles();
      return (
        <ListItem className={classes.expenseslist} button>
              <ListItemText className={classes.expensesreason} primary='Отдал долг'></ListItemText>
              <ListItemText className={classes.expensesnumber} edge='end' primary='-10000 ₽'></ListItemText>
              <ListItemSecondaryAction className={classes.deleteicon}>
                    <IconButton edge="end" aria-label="delete">
                    <DeleteIcon />
                    </IconButton>
              </ListItemSecondaryAction>
          </ListItem>
      );
  }

export default HistoryButtonMinus;


