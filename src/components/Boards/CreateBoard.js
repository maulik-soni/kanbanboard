import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { TextField } from '@material-ui/core';

export default function CreateBoard(props) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState('Controlled');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleFormSubmit=(e)=>{
    e.preventDefault();
    props.onCreate(value);
    handleClose();
  }


  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Create Board
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <form onSubmit={handleFormSubmit}>
          <DialogTitle id="alert-dialog-title">{"Enter Project Details"}</DialogTitle>
          <DialogContent>
            <TextField id="outlined-basic" label="Project Board" variant="outlined" onChange={handleChange} required/>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleFormSubmit} color="primary">
              Submit
            </Button>
            <Button onClick={handleClose} color="primary" autoFocus>
              Cancel
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}