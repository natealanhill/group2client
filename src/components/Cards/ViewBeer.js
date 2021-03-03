import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography';
// import Card from '@material-ui/core/Card';
// // import Input from '@material-ui/core/Input';
// import { CardContent } from '@material-ui/core';
// // import TextField from '@material-ui/core/TextField';
// import PropTypes from 'prop-types';      //------------------------
// import Button from '@material-ui/core/Button';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemText from '@material-ui/core/ListItemText';
// import DialogTitle from '@material-ui/core/DialogTitle';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogActions from '@material-ui/core/DialogActions';
// import Dialog from '@material-ui/core/Dialog';
// import RadioGroup from '@material-ui/core/RadioGroup';
// import Radio from '@material-ui/core/Radio';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import TextField from '@material-ui/core/TextField';
// import SimpleRating from './beerRating';
// import Box from '@material-ui/core/Box';

// pull information from the database per user *
// fetch from the database
// user id from the login
// beer Name - from table
// location - from table
// rating - from table
// notes - from table
// Notes

function displayMine() {
    const accessToken = localStorage.getItem('SessionToken')
    fetch('http://localhost:3000/beer/mine', {
        method: 'GET',
        headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': accessToken
        })
    })
    .then(
        function (response) {
            return response.json()
        })
        .catch(
            function(error) {
                console.error('Error:', error)
            })
        }


