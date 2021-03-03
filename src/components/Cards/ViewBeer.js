import React, { useState, useEffect } from 'react';


const ViewBeer = () => {
    const [beers, setbeers] = useState([])

    const displayMine = (token) => {

        fetch('http://localhost:3000/beer/', {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': token
            })
        })
            .then(
                response =>
                    response.json()
            )
            .then(
                json => {
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
        displayMine(localStorage.getItem('SessionToken'))
        

    }, [])
    // const accessToken = localStorage.getItem('SessionToken')


    // displayMine();

    return (
        <div color="white">
            <container background-color="white">
            {console.log("ViewBeer Component")}
            VIEW BEER

            {beers.map(beer => {
                return (
                    <div className="viewBeerCard">
                        <h3>{beer.name}</h3>
                        <p> {beer.location} </p>
                        <p> {beer.rating} </p>
                        <p> {beer.notes} </p>
                    </div>
                )
                
            })}
            </container>
            </div>
        
    )
}
export default ViewBeer;