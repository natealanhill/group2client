import React, { useState, useEffect } from 'react';
import ViewBeerCard from './ViewBeerCard'

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
            

            {beers.map(beer => {
                return (
                    <div className="viewBeerCard">

                        <ViewBeerCard name={beer.name}
                            location={beer.location}
                            rating={beer.rating}
                            comments={beer.comments}
                            img={beer.img}/>
                            <br>
                            </br>
                    </div>
                )
                
            })}
            </container>
            </div>
            
        
    )
}
export default ViewBeer;