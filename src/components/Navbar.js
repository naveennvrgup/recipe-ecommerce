import React, { Component } from 'react'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'


import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { ShoppingBasket } from '@material-ui/icons';
import Button from '@material-ui/core/Button'
import Avatar from '@material-ui/core/Avatar';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    alignItems: 'center',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  avatar: {
    marginRight: theme.spacing(1),
  }
}));


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function Navbar({orders}) {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            RecipieZilla
          </Typography>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <ShoppingBasket />
          </IconButton>
          <IconButton edge="start" onClick={handleClickOpen} color="inherit" aria-label="menu">
            <Avatar  alt="Starlord" src={require('../assets/starlord.jpg')} />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">Loggedin User </DialogTitle>
        <DialogContent>
          <Grid container className={classes.root}>
            <Grid className={classes.avatar}>
              <Avatar onClick={handleClickOpen} alt="Starlord" src={require('../assets/starlord.jpg')} />
            </Grid>
            <Grid>
              <Typography>starlord@avengers.mcu</Typography>
            </Grid>
          </Grid>

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

const mapStateToProps = (state) => state

const mapDispatchToProps = dispatch => bindActionCreators({
},dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)