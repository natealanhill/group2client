import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
// import Input from '@material-ui/core/Input';
import { CardContent } from "@material-ui/core";
// import TextField from '@material-ui/core/TextField';
import PropTypes from "prop-types"; //------------------------
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Dialog from "@material-ui/core/Dialog";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import "./BeerCard.css";
import TextField from "@material-ui/core/TextField";
import SimpleRating from "./beerRating";
import Box from "@material-ui/core/Box";

const options = [
  "Ale",
  "Lager",
  "Porter",
  "Stout",
  "Blonde Ale",
  "Pale Ale",
  "India Pale Ale",
  "Wheat",
  "Pilsner",
  "Sour Ale",
  "Other",
];

function ConfirmationDialogRaw(props) {
  const { onClose, value: valueProp, open, ...other } = props;
  const [value, setValue] = React.useState(valueProp);
  const radioGroupRef = React.useRef(null);

  React.useEffect(() => {
    if (!open) {
      setValue(valueProp);
    }
  }, [valueProp, open]);

  const handleEntering = () => {
    if (radioGroupRef.current != null) {
      radioGroupRef.current.focus();
    }
  };

  const handleCancel = () => {
    onClose();
  };

  const handleOk = () => {
    onClose(value);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Dialog
      disableBackdropClick
      disableEscapeKeyDown
      maxWidth="xs"
      onEntering={handleEntering}
      aria-labelledby="confirmation-dialog-title"
      open={open}
      {...other}
    >
      <DialogTitle id="confirmation-dialog-title">
        What beer did you find?
      </DialogTitle>
      <DialogContent dividers>
        <RadioGroup
          ref={radioGroupRef}
          aria-label="beer-type"
          name="beer"
          value={value}
          onChange={handleChange}
        >
          {options.map((option) => (
            <FormControlLabel
              value={option}
              key={option}
              control={<Radio />}
              label={option}
            />
          ))}
        </RadioGroup>
      </DialogContent>

      <DialogActions>
        <Button autoFocus onClick={handleCancel} color="primary">
          Cancel
        </Button>
        <Button onClick={handleOk} color="primary">
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  );
}

ConfirmationDialogRaw.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
};

//-----------------------------------------------//

const BeerCard = () => {
  const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: "inline-block",
      margin: "0 2px",
      transform: "scale(0.8)",
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

  const classes = useStyles();
  // const bull = <span className={classes.bullet}>•</span>;
  const [open, setOpen] = React.useState(false); //-----------
  const [value, setValue] = React.useState("Select"); //-----------
  const { onClose, value: valueProp, ...other } = value;

  const handleClickListItem = () => {
    setOpen(true);
  };

  const handleClose = (newValue) => {
    setOpen(false);

    if (newValue) {
      setValue(newValue);
    }
  };

  const handleEdit = () => {
    onClose(value);
  };

  const handleCancel = () => {
    onClose(value);
  };

  const handleSubmit = () => {
    onClose(value);
  };
  //---------------------------------
  return (
    <div>
      <Card className={classes.root} variant="outlined ">
        <CardContent>
          <Typography variant="p" id="header">
            Add your beer!
          </Typography>
          <Typography variant="h5" component="h2">
            <List component="div" role="list" id="box">
              <ListItem button divider disabled role="listitem">
                <ListItemText primary="POST" />
              </ListItem>
              <ListItem
                button
                divider
                aria-controls="beer-menu"
                aria-label="beer type"
                onClick={handleClickListItem}
                role="listitem"
              >
                <ListItemText primary="Beer Menu" secondary={value} />
              </ListItem>
              <ListItem button divider disabled role="listitem">
                <ListItemText primary="Beer Box" id="content-box" />
              </ListItem>
              <ConfirmationDialogRaw
                classes={{
                  paper: classes.paper,
                }}
                id="beer-menu"
                keepMounted
                open={open}
                onClose={handleClose}
                value={value}
              />
              {/* <div>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend">Controlled</Typography>
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
      </Box>
      </div> */}

              {/* ========================== */}
              <form className={classes.root} noValidate autoComplete="off">
                <TextField
                  id="standard-secondary"
                  label="Beer Name"
                  color="secondary"
                  variant="outlined"
                />
                <TextField
                  id="filled-secondary"
                  label="Location"
                  variant="outlined"
                  color="secondary"
                />
                <br />
                <br />
                <TextField
                  id="outlined-secondary"
                  label="comment"
                  variant="outlined"
                  color="secondary"
                />
              </form>
              {/* ========================================== */}
            </List>
            <Button onClick={handleSubmit} color="primary">
              Submit
            </Button>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default BeerCard;