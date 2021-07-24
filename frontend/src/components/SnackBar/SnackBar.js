import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import {makeStyles} from '@material-ui/styles';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));


const CustomizedSnackbars = ({severity, message, open_}) => {
  // severity could be error, warning, info, success
  const classes = useStyles();
  const [open, setOpen] = React.useState(open_);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
         <Alert severity={severity} onClose={handleClose}>{message}</Alert>
      </Snackbar>
    </div>
  );
};

export default CustomizedSnackbars;
