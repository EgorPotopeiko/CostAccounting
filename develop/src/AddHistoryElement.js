import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import DeleteIcon from '@material-ui/icons/Delete';
import {Grow} from "@material-ui/core";

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
    standartreason: {
      maxWidth: 150,
    },
    standartnumber: { 
      maxWidth: 70,
      paddingRight: 30,
    },
  });


const HistoryButton = ({data, setData}) => {

  const deleteItem = (id) => {
    let newData = [];
    data.forEach((el, i) => {
      if(i !== id) {
        newData.push(el);
      }
    });
    setData(newData);
  }
    const classes = useStyles();
    return(
      data.map((item, id) => (
        <Grow in timeout={5}>
        <ListItem className={item.amount[0] === '-' ? classes.expenseslist : classes.revenuelist} button key={id}>
        <ListItemText className={classes.standartreason} primary={item.description}></ListItemText>
        <ListItemText className={classes.standartnumber} edge='end' primary={item.amount}></ListItemText>
        <ListItemSecondaryAction className={classes.deleteicon}>
            <IconButton edge="end" aria-label="delete">
            <DeleteIcon onClick={() => deleteItem(id)}/>
            </IconButton>
        </ListItemSecondaryAction>
        </ListItem>
        </Grow>
      ))
    );
};

export default HistoryButton;
