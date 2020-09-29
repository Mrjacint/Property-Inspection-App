import React from 'react';
import { connect } from 'react-redux';

import Room from './Room/Room';
import * as actions from '../../../store/actions';
// import RoomForm from './RoomForm';
// import Modal from './../../UI/Modal/Modal'

const Rooms = (props) => {

    //console.log(props)

    let roomsArr = [];
    let renderRooms = null;
    //let roomForm = null;

    const deleteRoom = (id) => {
        //console.log(props.property.rooms)
        //console.log('delete room', id)
        if(window.confirm('Are you sure to delete ' + props.property.rooms[id].roomName)) {
            let updatedRooms = props.property.rooms
            delete updatedRooms[id]
            props.onDeleteRoom(props.property.id, updatedRooms)

        }
    }

    // const editRoom = () => {
    //     console.log('edit room')
    //     //roomForm = <Modal show="true"><RoomForm /></Modal> ;
    // }

    if (props.property) {
        for(let room in props.property.rooms) {
            let roomDetails = props.property.rooms ? room : {};
            roomsArr.push({
                ...props.property.rooms[roomDetails]
            })
        }
    }
  
    if(roomsArr) {
        renderRooms = roomsArr.map((item) => {
            return (
                <Room 
                    room={item} 
                    key={item.roomId} 
                    deleteRoom={deleteRoom}
                    // editRoom={editRoom} 
                    />
            )
        })
    }
    
    return (
        <div className="rooms-container" >
            {/* {roomForm} */}
            {renderRooms}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        property: state.propertyReducer.selected
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onDeleteRoom: (propertyId, updatedRooms) => dispatch(actions.removeRoom(propertyId, updatedRooms))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Rooms);