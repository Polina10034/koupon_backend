import React, { Fragment, useState } from 'react';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from '../Theme/newTheme';
import api from '../../api/api';
import { useForm } from 'react-hook-form';
import TextField from '@material-ui/core/TextField';
import CloseIcon from '@material-ui/icons/Close';

import { StyledButton } from '../Theme/Button.styled';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  IconButton,
  DialogTitle,
} from '@material-ui/core';

export default function FormDialog(props) {
  const [open, setOpenForm] = useState(false);
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => {
    console.log(data);
    handleClose();
    api
    .addCoupon(data)
    .then(result => {
      console.log('SUCCESS!');
      // this.setState({
      //   name: '',
      //   capitals: '',
      //   area: '',
      //   description: '',
      //   message: `Your coupon '${this.state.name}' has been created`,
      // });
      // setTimeout(() => {
      //   this.setState({
      //     message: null,
      //   });
      // }, 2000);
    })
    .catch(err => this.setState({ message: err.toString() }));
  };
  console.log(errors);

  const handleOpenForm = () => {
    setOpenForm(true);
  };

  const handleClose = () => {

    setOpenForm(false);
  };

  

  return (
    <MuiThemeProvider theme={theme}>
      <Fragment>
        {api.isLoggedIn() && (
          <IconButton onClick={handleOpenForm}>
            <AddCircleIcon fontSize="large" />
          </IconButton>
        )}
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <CloseIcon className="button_close" onClick={handleClose}/>
          <DialogTitle id="form-dialog-title">Create New Coupon</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please Fill Coupon Information
            </DialogContentText>
            <form onSubmit={handleSubmit(onSubmit)}>
              <TextField fullWidth inputRef={register} label="Item name" name="title" />
              <TextField fullWidth
                inputRef={register}
                label="Coupon name"
                name="couponName"
              />
              <TextField fullWidth inputRef={register} label="Discount" name="discount" />
              <TextField fullWidth inputRef={register} label="Link" name="link" />
              <TextField fullWidth inputRef={register} label="Image Url" name="imgUrl" />
              <input className="button" type="submit" />
              
            </form>
          </DialogContent>
        </Dialog>
      </Fragment>
    </MuiThemeProvider>
  );
}