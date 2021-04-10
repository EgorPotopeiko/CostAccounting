import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import {CardActions} from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';
import React, {useState} from 'react';

/*
  Относительно стилей, то нужно определиться с одним подходом их задания и использования.
  Например, сейчас в проекте стили задаются так, как указано ниже (CSS-modules) + в файлах App.css, index.css
  Нужно выбрать один подход и использовать его, либо так, либо так, на усмотрение разработчика.
  Также определения стилей думаю будет смысл выносить в отдельные файлы и уже импортировать туда, где они будут использоваться.
  Ниже стилей немного указано, но их может быть достаточно много и может получится простыня кода в файле компонента.
*/

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
      borderRadius: 50
    },
    moneyinput: {
      marginTop: 20,
      borderRadius: 50,
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






  const CardMenu = ({data, setData}) => {
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState(0);
    const addItem = () => {
      setData([...data, {description: description, amount: amount}]);
    }
    const classes = useStyles();
      return (
        <Card className={classes.CardAdd}>
        <CardContent>
        <Typography className={classes.inputtitle}>Новая операция</Typography>
        <div className={classes.inputfields}>
        <TextField classes={{root: classes.nameinput, label: classes.nameinput}} id="outlined-basic" onChange={(e) => {setDescription(e.target.value)}} label="Наименование операции" value={description} variant="outlined" />
        <TextField className={classes.moneyinput}
          id="outlined-adornment-amount"
          variant="outlined"
          value={amount}
          onChange={(e) => {setAmount(e.target.value)}}
          label="Amount"
          onFocus={()=>{setAmount("")}}
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        </div>
        </CardContent>
        <CardActions>
        <Button className={classes.addBtn} variant="contained" disableElevation onClick={addItem} style={{margin: "0 auto"}}>
          Добавить операцию
        </Button>
        </CardActions>
        </Card>
      )
  }

  export default CardMenu;
