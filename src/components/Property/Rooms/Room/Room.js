import React, { useState, Fragment } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

import classes from './Room.module.css';

const Room = (props) => {
    console.log(props)
    const [collapse, setCollapse] = useState("collapse")
    //const [form, setForm] = useState(false)

    const handleCollapse = () => {
        collapse === "collapse" ? setCollapse("collapse show") : setCollapse("collapse");
    }

    // const editRoom = () => {
    //     //setForm(true);
    //     console.log('edit room')
    // }
    
    //console.log(form)

    return (
        <Fragment>
            {/* {form ? <RoomForm show={form} /> : null} */}
            <Card>
                <Card.Header onClick={handleCollapse} >{props.room.roomName}</Card.Header>
                <Card.Body className={collapse}>
                        <dl>
                            <dt>Hours:</dt><dd>{props.room.hours}</dd>
                            <dt>Carpet:</dt><dd>{props.room.carpet}</dd>
                            <dt>Note:</dt><dd>{props.room.roomNote}</dd>
                        </dl>
                    <Button 
                        variant="primary" 
                        size="sm"
                        className="m-1"
                        //onClick={() => props.editRoom()} >
                        //onClick={editRoom} 
                        >
                            <Link 
                                to={{ pathname: '/property/room-form', roomId: props.room.roomId}}
                                className={classes.link} >
                                Edit
                            </Link>
                        </Button>
                    <Button 
                        variant="danger" 
                        size="sm"
                        className="m-1"
                        onClick={() => props.deleteRoom(props.room.roomId)} >
                            Delete</Button>
                </Card.Body>             
            </Card>
        </Fragment>
    );
};

export default Room;