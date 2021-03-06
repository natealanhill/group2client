// import React, { useState } from 'react';
// import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody } from 'reactstrap';


// const EditBeer = (props) => {
//     const [editName, setEditName] = useState(props.beerToUpdate.name);
//     const [editLocation, setEditLocation] = useState(props.beerToUpdate.location);
//     const [editRating, setEditRating] = useState(props.beerToUpdate.rating);
//     const [editType, setEditType] = useState(props.beerToUpdate.type);
//     const [editComments, setEditComments] = useState(props.beerToUpdate.comments);
//     const beerUpdate = (event, beer) => {
//         event.preventDefault();
//         fetch(`http://localhost:3000/edit/${id}`, {
//             method: 'PUT',
//             body: JSON.stringify({
//                 beer: {
//                     name: editName,
//                     location: editLocation,
//                     rating: editRating,
//                     type: editType,
//                     comments: editComments,
//                 }}),
//                 header: new Headers({
//                     'Content-Type': 'application/json',
//                     'Authorization': userToken
//                 })
                
//             }).then((res) => {
//                 props.fetchBeer();
//                 props.updateOff();
//             })
//         }
    
//     return (
//         <>
//             This is Beer Edit
//         </>
//     )
// }

// export default EditBeer;
