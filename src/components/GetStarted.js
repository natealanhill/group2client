import { useState } from "react";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Button from "@material-ui/core/Button";
import Auth from "./LoginComponents/Auth";

import logo from '../assets/logo.png'

const welcomeStyles = {
  background: 'rgba(0, 0, 0, 0.55)',
}

const GetStarted = () => {
  const useStyles = makeStyles((theme) => ({
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <img
        src={logo}
        className="App-logo"
        alt="logo"
        style={{ width: "45%", height: "45%" }}
      />
      <p>
        <code style={welcomeStyles}>Welcome to your Beer Wingman.</code>
        {/* <p style={{marginTop: '2px', marginBottom: '3px ', fontSize: '15px'}}> Create your own custom BeerJournal to rate, describe, and remember the beers you taste or drink. </p> */}
      </p>
      <Button variant="contained" type="button" onClick={handleOpen}>
        Get Started
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 800,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            {/* This is where all the logic for login and signup rendering is handled */}
            <Auth />
          </div>
        </Fade> 
      </Modal>
    </div>
  );
};

export default GetStarted;
