import * as actionType from './../actionsType';
import axios from 'axios';

const URL = 'https://jacint-portfolio.firebaseio.com'

export const saveNewRoom = (id ,rooms) => {
    console.log('Saving...')
    return (
        axios({
            method: 'put',
            url: URL + `/works/${id}/rooms.json`,
            data: rooms
        }).then(response => {
            // console.log(response)
            console.log('New room has saved to DB')
        })
    )
}

export const addRoom = (id, rooms) => {
    saveNewRoom(id, rooms)
    //console.log(id)
    //console.log(rooms)
    return {
        type: actionType.ADD_ROOM,
        id: id,
        payload: rooms
    }
}

export const deleteRoom = (propertyId, updatedRooms) => {
    return {
        type: actionType.DELETE_ROOM,
        propertyId,
        updatedRooms
    }
}

export const removeRoom = (propertyId, updatedRooms) => {
    console.log('updateing')
    return dispatch => {
        axios({
            method: 'put',
            url: URL + `/works/${propertyId}/rooms.json`,
            data: updatedRooms
        }).then(response => {
            console.log(response);
            dispatch(deleteRoom(propertyId, updatedRooms))
        })    }
}