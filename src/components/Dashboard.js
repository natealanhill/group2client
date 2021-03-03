import { useState } from 'react'

import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Modal from "@material-ui/core/Modal";

import BeerCard from './Cards/BeerCard';



const Dashboard = () => {
    const useStyles = makeStyles((theme) => ({
        icon: {
          marginRight: theme.spacing(2),
        },
        heroContent: {
          backgroundColor: theme.palette.background.paper,
          padding: theme.spacing(8, 0, 6),
        },
        heroButtons: {
          marginTop: theme.spacing(4),
        },
        cardGrid: {
          paddingTop: theme.spacing(8),
          paddingBottom: theme.spacing(8),
        },
        card: {
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        },
        cardMedia: {
          paddingTop: '56.25%', // 16:9
        },
        cardContent: {
          flexGrow: 1,
        },
        footer: {
          backgroundColor: theme.palette.background.paper,
          padding: theme.spacing(6),
        },
      }));

      const [open, setOpen] = useState(false);

    const handleOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };
      

    const topStyles = {
        background: "rgba(0, 0, 0, 0.65)",
    }

    const classes = useStyles();

    return (
        <div>
            <CssBaseline />
      <AppBar position="relative">

      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}
            style={topStyles}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h4" align="center" gutterBottom>
              Welcome, User! 
            </Typography>

            <Button onClick={handleOpen} variant="contained">
                Add Beer
            </Button>
            <Button onClick={viewCard} variant="contained">
              View Your Beers
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
           <BeerCard />
          </div>
        </Fade>
      </Modal>

          </Container>
        </div>

      </main>


        </div>
    )
}

export default Dashboard; 