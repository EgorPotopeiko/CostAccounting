import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles({
    revenuelist: {
      alignItems: 'center',
      backgroundColor: '#fff',
      borderTop: '1px solid black',
      borderBottom: '1px solid black',
      borderLeft: '10px solid darkgreen',
      borderRight: '10px solid darkgreen',
      borderRadius: 10,
      color: '333',
      display: 'flex',
      justifyContent: 'space-between',
      padding: 10,
      margin: '10px 0',
      lineHeight: 25,
      listStyle: 'none',
      marginTop: 20,
    },
    revenuereason: {
      maxWidth: 150,
    },
    revenuenumber: { 
      maxWidth: 70,
      paddingRight: 30,
    },
  });

const HistoryButtonPlus = () => {
    const classes = useStyles();
    return(
        <ListItem className={classes.revenuelist} button>
        <ListItemText className={classes.revenuereason} primary='Получил зарплату'></ListItemText>
        <ListItemText className={classes.revenuenumber} edge='end' primary='+30000 ₽'></ListItemText>
        <ListItemSecondaryAction className={classes.deleteicon}>
            <IconButton edge="end" aria-label="delete">
            <DeleteIcon />
            </IconButton>
        </ListItemSecondaryAction>
        </ListItem>
    );
}

export default HistoryButtonPlus;


