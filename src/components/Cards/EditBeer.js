import React, {useState} from 'react';



const EditBeer = (props) => {
    const [editName, setEditName] = useState(props.beerToUpdate.name);
    const [editLocation, setEditLocation] = useState(props.beerToUpdate.location);
    const [editRating, setEditRating] = useState(props.beerToUpdate.rating);
    const [editType, setEditType] = useState(props.beerToUpdate.type);
    const [editComments, setEditComments] = useState(props.beerToUpdate.comments);

    return(
        <>
        This is Beer Edit
        </>
    )
}

export default EditBeer;
