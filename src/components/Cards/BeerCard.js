import React from 'react';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
// import Input from '@material-ui/core/Input';
import { CardContent } from '@material-ui/core';
// import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types'; //------------------------
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import './BeerCard.css';
import TextField from '@material-ui/core/TextField';
import APIURL from '../../helpers/environment';




function ConfirmationDialogRaw(props) {
	const { onClose, value: valueProp, open, ...other } = props;
	const [ value, setValue ] = React.useState(valueProp);
	const radioGroupRef = React.useRef(null);

	// React.useEffect(
	// 	() => {
	// 		if (!open) {
	// 			setValue(valueProp);
	// 		}
	// 	},
	// 	[ valueProp, open ]
	// );

	// const handleEntering = () => {
	// 	if (radioGroupRef.current != null) {
	// 		radioGroupRef.current.focus();
	// 	}
	// };

	// const handleCancel = () => {
	// 	onClose();
	// };

	// const handleOk = () => {
	// 	onClose(value);
	// };

	// const handleChange = (event) => {
	// 	setValue(event.target.value);
	// };
	// console.log(props.beer)

	return (
        <></>
			);
}

ConfirmationDialogRaw.propTypes = {
	onClose: PropTypes.func.isRequired,
	open: PropTypes.bool.isRequired,
	value: PropTypes.string.isRequired
};



const BeerCard = (props) => {

	const [ name, setName ] = useState('');
    const [ location, setLocation ] = useState('');
	const [ type, setType ] = useState('');
	const [ rating, setRating ] = useState('');
	const [ comments, setComments ] = useState('');

	const addBeer = async (e) => {     //is being called on line 283
        console.log(name, type, rating, comments, location)
		e.preventDefault();
		const response = await fetch(`${APIURL}/beer/create`, {
			method: 'POST',
			body: JSON.stringify({
				beer: {
					name: name,
					type: type,
					rating: rating,
					comments: comments,
                    location: location
				}
			}),
			headers: new Headers({
				'Content-Type': 'application/json',
				// 'Accept': 'application/json',
				// 'Status': 'OK',
				Authorization: localStorage.getItem('token')
			})
		})
			.then((res) => res.json())
			.then((data) => {
                console.log(data);
				setName('');
                setLocation('')
				setType('');
				setRating(0);
				setComments('');
			});
            return response
	};

	//   let beerObj = {
	//     beer: {
	//       name: name,
	//       type: type,
	//       rating: rating,
	//       comments: comments
	//     }
	//   }

	// -------------------------------------------

	const useStyles = makeStyles({
		root: {
			minWidth: 275
		},
		bullet: {
			display: 'inline-block',
			margin: '0 2px',
			transform: 'scale(0.8)'
		},
		title: {
			fontSize: 14
		},
		pos: {
			marginBottom: 12
		}
	});

	const classes = useStyles();
	// const bull = <span className={classes.bullet}>•</span>;
	const [ open, setOpen ] = React.useState(false); //-----------
	const [ value, setValue ] = React.useState('Select'); //-----------
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

	// const handleEdit = () => {
	// 	onClose(value);
	// };

	// const handleCancel = () => {
	// 	onClose(value);
	// };

	const handleSubmit = () => {
		//Closes the form once submit is clicked
		onClose(value);
	};

	//-----Card buildout ----------
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
								
							</ListItem>
							<ListItem button divider disabled role="listitem">
								<ListItemText primary="Beer Box" id="content-box" />
							</ListItem>
							<ConfirmationDialogRaw
								classes={{
									paper: classes.paper
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

							
							<form className={classes.root} noValidate autoComplete="off">
								<TextField
                                    onChange={(e) => setName(e.target.value)}
                                     value={name}
									id="standard-secondary"
									label="Name"
									color="secondary"
									variant="outlined"
								/>

								<TextField
									onChange={(e) => setLocation(e.target.value)}
									value={location}
									id="filled-secondary"
									label="Location"
									variant="outlined"
									color="secondary"
								/>
								
								<br />
								<br />
								<TextField
                                onChange={(e) => setType(e.target.value)}
                                value={type}
									id="outlined-secondary"
									label="Type"
									variant="outlined"
									color="secondary"
								/>
								<TextField
                                onChange={(e) => setRating(e.target.value)}
                                value={rating}
									id="outlined-secondary"
									label="Rating"
									variant="outlined"
									color="secondary"
								/>

                                <TextField
                                onChange={(e) => setComments(e.target.value)}
                                value={comments}
									id="outlined-secondary"
									label="Comments"
									variant="outlined"
									color="secondary"
								/>

						<Button onClick={(e) => addBeer(e)} color="primary">
							Submit
						</Button>
							</form>
							{/* ========================================== */}
						</List>
					</Typography>
				</CardContent>
			</Card>
		</div>
	);
};

export default BeerCard;
