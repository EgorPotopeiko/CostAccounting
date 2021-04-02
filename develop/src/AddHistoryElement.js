import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles({
    standartlist: {
      alignItems: 'center',
      backgroundColor: '#fff',
      borderTop: '1px solid black',
      borderBottom: '1px solid black',
      borderLeft: '10px solid grey',
      borderRight: '10px solid grey',
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
    standartreason: {
      maxWidth: 150,
    },
    standartnumber: { 
      maxWidth: 70,
      paddingRight: 30,
    },
  });

  let dbOperation = [
    {
    id: '1',
    description: 'Такси',
    amount: -5000,
    }
  ]

const HistoryButton = () => {
    const classes = useStyles();
    return(
        <ListItem className={classes.standartlist} button>
        <ListItemText className={classes.standartreason} primary=''></ListItemText>
        <ListItemText className={classes.standartnumber} edge='end' primary=''></ListItemText>
        <ListItemSecondaryAction className={classes.deleteicon}>
            <IconButton edge="end" aria-label="delete">
            <DeleteIcon />
            </IconButton>
        </ListItemSecondaryAction>
        </ListItem>
    );
};

export default HistoryButton;
