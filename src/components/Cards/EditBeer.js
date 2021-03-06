import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody } from 'reactstrap';
import APIURL from '../../helpers/environment';

const EditBeer = ({token, bId, beer, setIsUpdating}) => {
    console.log(beer, token)

    const [editName, setEditName] = useState(beer.name);
    const [editLocation, setEditLocation] = useState(beer.location);
    const [editRating, setEditRating] = useState(beer.rating);
    const [editType, setEditType] = useState(beer.type);
    const [editComments, setEditComments] = useState(beer.comments);
    const beerUpdate = (event) => {
        event.preventDefault();
        fetch(`${APIURL}/beer/edit/${bId}`, {
            method: 'PUT',
            body: JSON.stringify({
                beer: {
                    name: editName,
                    location: editLocation,
                    rating: editRating,
                    type: editType,
                    comments: editComments,
                }}),
                headers: new Headers({
                    'Content-Type': 'application/json',
                    'authorization': token
                })
                
            }).then((res) => {
                // props.fetchBeer();

                setIsUpdating(false);
            })
        }
  
        return (
            <Modal isOpen={true}>
                <ModalHeader>Edit a Beer</ModalHeader>
                <ModalBody>
                    <Form onSubmit={(e) => beerUpdate(e)}>
                        {console.log("Form called")}
                        <FormGroup>
                            <Label htmlFor="name">Edit Name:</Label>
                            <Input name="result" value={editName} onChange={(e) => setEditName(e.target.value)} />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="location">Edit location:</Label>
                            <Input name="result" value={editLocation} onChange={(e) => setEditLocation(e.target.value)} />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="type">Edit Type:</Label>
                            <Input name="result" value={editType} onChange={(e) => setEditType(e.target.value)} />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="rating">Edit Rating:</Label>
                            <Input name="result" value={editRating} onChange={(e) => setEditRating(e.target.value)} />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="comments">Edit Comments:</Label>
                            <Input name="result" value={editComments} onChange={(e) => setEditComments(e.target.value)} />
                        </FormGroup>
                        <Button type="submit">Update Beer</Button>
                    </Form>
                </ModalBody>
            </Modal>

    )
}

export default EditBeer;
