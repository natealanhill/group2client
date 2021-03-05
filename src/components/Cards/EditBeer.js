import React, { useState, useEffect } from 'react';
import ViewBeerCard from './ViewBeerCard'
import Grid from '@material-ui/core/Grid'

// code from the Client module
function editJournal(postId) {
    console.log(postId)
    const fetch_url = `http://localhost:3000/beer/edit${postId}`
    const accessToken = localStorage.getItem('SessionToken')

    let card = document.getElementById(postId)
    let input = document.createElement('input')

    if (card.childNodes.length <2) {
        card.appendChild(input)
        input.setAttribute('type', 'text')
        input.setAttribute('id', 'updatedEntry')
        input.setAttribute('placeholder', 'Edit yout Beer Entry')
    }else{

        let updated = document.getElementById('updatedEntry').value
        let updateEntry = { journal: {entry: updated}};
        const response = fetch(fetch_url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': accessToken
            },
            body:JSON.stringify(updateEntry)
        })
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data)
            displayMine();
        })
        card.removeChild(card.lastChild)
    }
}



























const ViewBeer = (props) => {

    const [beers, setbeers] = useState([])



    const displayMine = (userToken) => {

        userToken = props.token

        fetch('http://localhost:3000/beer/delete/${id}', {
            method: 'DEL',
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
                    setbeers(json);
                    console.log(beers);
                })
            .catch(
                error =>
                    console.error('Error:', error)
            )
    }
    useEffect(() => {
        console.log("Break Check for Delete")
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
                        <div className="deleteBeerCard">
                            {/* <Grid container>
                                <Grid item xs={2}> */}


                            <DeleteBeerCard 
                                id={beer.id}
                                name={beer.name}
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