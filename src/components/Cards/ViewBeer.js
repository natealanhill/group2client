import React, { useState, useEffect } from 'react';
import ViewBeerCard from './ViewBeerCard'
import Grid from '@material-ui/core/Grid'

const ViewBeer = (props) => {

    const [beers, setbeers] = useState([])



    const displayMine = (userToken) => {

        userToken = props.token

        fetch('http://localhost:3000/beer/', {
            method: 'GET',
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
                    console.log(json)
                    setbeers(json)
                    console.log(beers)
                })
            .catch(
                error =>
                    console.error('Error:', error)
            )
    }
    useEffect(() => {
        console.log("Break Check")
        displayMine(localStorage.getItem('token'))


    }, [])
    // const accessToken = localStorage.getItem('SessionToken')


    // displayMine();

    return (
        <div color="white">
            <container background-color="white">
                {console.log("ViewBeer Component")}


                {beers.map(beer => {
                    return (
                        <div className="viewBeerCard">
                            {/* <Grid container>
                                <Grid item xs={2}> */}


                                <ViewBeerCard name={beer.name}
                                    location={beer.location}
                                    rating={beer.rating}
                                    comments={beer.comments}
                                    img={beer.img} />
                                <br>
                                </br>
                            {/* </Grid>
                                    </Grid> */}
                        </div>
                    )

                })}
            </container>
        </div>


    )
}
export default ViewBeer;