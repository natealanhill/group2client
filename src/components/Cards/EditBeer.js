import React, {use State} from 'react';


Name location type rating comments
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
