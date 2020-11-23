import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { TextField } from '@material-ui/core';

export default function CreateCard(props) {
  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleFormSubmit=(e)=>{
    e.preventDefault();
    props.onCreate({title, description});
    handleClose();
  }


  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Create Card
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <form onSubmit={handleFormSubmit}>
          <DialogTitle id="alert-dialog-title">{"Enter Card Details"}</DialogTitle>
          <DialogContent>
            <TextField id="outlined-basic" label="Card Title" variant="outlined" onChange={handleTitleChange} required/>
            <TextField id="outlined-basic" label="Card Description" variant="outlined" onChange={handleDescriptionChange} required/>
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