import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';


import Input from '../../UI/Inputs/Input';
import TextArea from '../../UI/Inputs/TextArea';
import Radio from '../../UI/Inputs/Radio';
import * as actions from '../../../store/actions/actions';


const RoomForm = (props) => {

    let roomName = '';

    
    const [room, setRoom] = useState({
        roomId: null,
        roomName: roomName,
        hours: 0.5,
        carpet: 'No',
        roomNote: ''
    })
    const [redirect, setRedirect] = useState(null)
    
    if (props.location.state) {
        
        roomName = 'bedroom ' + props.location.state.roomNumber;

    }
    useEffect(() => {
        if (props.location.roomId) {
            console.log('this room can be edited')
            setRoom({
                roomId: props.property.rooms[props.location.roomId].roomId,
                roomName: props.property.rooms[props.location.roomId].roomName,
                hours: props.property.rooms[props.location.roomId].hours,
                carpet: props.property.rooms[props.location.roomId].carpet,
                roomNote: props.property.rooms[props.location.roomId].roomNote
            })
        }    
    },[props])



    //let renderProperty = null;

    console.log(props)
    console.log(props.location.roomId)
    console.log(props.property.rooms[props.location.roomId])
    console.log(room)
    
    const handleInput = (event) => {
        setRoom({...room, [[event.target.name]]: event.target.value})
    };

    const handleDetailsSubmit = (event) => {
        
        event.preventDefault();
        if (room.roomId === null) {
            setRoom({ ...room, roomId: Date.now() })
        }
        else {

            let rooms = null
    
            if (props.property.rooms){
                rooms = {...props.property.rooms, [room.roomId]: room}
            }else{
                rooms = {[room.roomId]: room}
            }
    
            props.onAddRoom(props.property.id, rooms)
    
            setRedirect(<Redirect to="/property" />)
        }
    }

    return (
        <div>
            {redirect}
            <div>
                <Link to="/property" className="btn btn-light btn-sm" >Back</Link>
            </div>
            <div className="">
                <h5>{props.property.clientAddress}</h5>
            </div>
            <form onSubmit={handleDetailsSubmit}>
                <div className="form-group">
                    <label>Room</label>
                    <Input
                        type="text"
                        name="roomName"
                        placeholder="Enter Room name"
                        change={event => handleInput(event)}
                        value={room.roomName}
                        required />
                </div>
                <div className="form-group">
                    <label>Hours</label>
                    <Input
                        type="number"
                        name="hours"
                        change={event => handleInput(event)}
                        min="0"
                        step="0.5"
                        value={room.hours}
                        required />
                </div>
                <div className="form-group">
                    <label>Carpet?</label>
                    <div>
                        <Radio
                            name="carpet"
                            change={event => handleInput(event)}
                            value="yes"
                            label="Yes"
                            class="form-check form-check-inline"
                            />
                        <Radio
                            name="carpet"
                            change={event => handleInput(event)}
                            value="no"
                            label="No"
                            class="form-check form-check-inline"
                            />
                    </div>
                </div>
                <div className="form-group">
                    <label>Note</label>
                    <TextArea
                        type="number"
                        name="roomNote"
                        change={event => handleInput(event)}
                        value={room.roomNote}
                        required />
                </div>
                <div  className="form-group">
                    <button
                        className="btn btn-primary"
                        // onClick={() => setRoom({ ...room, roomId: Date.now() })}
                        >
                        Add
                    </button>
                </div>
            </form>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        property: state.selected
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddRoom: (id, newRoom) => dispatch(actions.addRoom(id, newRoom))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RoomForm);