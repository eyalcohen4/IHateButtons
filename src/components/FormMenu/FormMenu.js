import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function DialogSelect({handleClick}) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    open: false,
    League: { name: '' },
    Fixture: { number: '' }
  });

  const handleChangeLeague = name => event => {
    setState({ ...state, [name]: String(event.target.value) });
  };

    const handleChangeFixture = number => event => {
    setState({ ...state, [number]: Number(event.target.value) });
  };

  const handleClickOpen = () => {
    setState({ ...state, open: true });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  return (
    <div>
      <Button onClick={handleClickOpen}>Choose League</Button>
      <Dialog disableBackdropClick disableEscapeKeyDown open={state.open} onClose={handleClose}>
        <DialogTitle>Fill the form</DialogTitle>
        <DialogContent>
          <form className={classes.container}>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="age-native-simple">League</InputLabel>
              <Select
                native
                value={state.League}
                onChange={handleChangeLeague ('League')}
               // input={<Input id="age-native-simple" />}
              >
                <option value={1}>UCL</option>
                <option value={2}>Premier League</option>
              </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="age-simple">Fixture</InputLabel>
              <Select
                value={state.age}
                onChange={handleChangeFixture ('Fixture')}
               // input={<Input id="age-native-simple" />}
              >
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
              </Select>
            </FormControl>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button 
          onClick={handleClose} 
          color="primary"
          handleclick={handleClick}>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}