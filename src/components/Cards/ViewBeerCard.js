import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom";
// import { Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody } from 'reactstrap';

// import { Container, Row, Col } from 'reactstrap';
import EditBeer from './EditBeer';
import APIURL from '../../helpers/environment';

export default function MediaCard({ id, name, location, type, rating, comments, displayMine }) {
    const beerInfo = {
        name: name,
        location: location,
        type: type,
        rating: rating,
        comments: comments
    }
    const [isUpdating, setIsUpdating] = useState(false)

    const useStyles = makeStyles({
        root: { minWidth: 300, },
        media: { height: 140, },
    });

    const userToken = localStorage.getItem("token")

   
    const deleteBeer = (id) => {

        const fetch_url = `${APIURL}/beer/delete/${id}`
        fetch(fetch_url, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': userToken
            })
        })
            .then(
                response =>
                    response.json()
            )
            .then(
                json => {
                    console.log(json);
                })
            .catch(
                error =>
                    console.error('Error:', error)
            )
    }

    const classes = useStyles();

    return (


        <Card className={classes.root} variant="">
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image="data:image/jpeg;base64,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"
                    title="Beer"
                />
                <CardContent>
                    <Typography gutterBottom variant="h3" component="h2">
                        {name}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h4">
                        {type}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h1" color="">
                        Location: {location}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h1" color="">
                        Type: {type}
                    </Typography>
                    <Typography gutterBottom variant="h10" component="h9">
                        Rating
                                <br></br>
                        {rating}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {comments}
                    </Typography>
                   
                </CardContent>
            </CardActionArea>
            <CardActions>
                {/* <Button size="small" color="primary">
                            Share
                        </Button> */}
              
                <Button onClick={() => setIsUpdating(!isUpdating)} variant="contained">
                    Edit
                </Button>
                {isUpdating && <EditBeer token={userToken} bId={id} beer={beerInfo} setIsUpdating={setIsUpdating}/>}
            
                <Link to="/Cards/viewBeer">
                    <Button onClick={() => deleteBeer(id)} variant="contained">
                        Delete
                    </Button>
                </Link>
            </CardActions>
        </Card>


    );
}
