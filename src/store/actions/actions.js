import * as actionType from './actionsType';
import axios from 'axios';

const URL = 'https://jacint-portfolio.firebaseio.com'

export const setFetchedData = (data) => {
    return {
        type: actionType.SET_LIST,
        payload: data
    }
}

export const fetchData = () => {
    //console.log('fetch data action')
    return dispatch => {
        axios({
            method: 'get',
            url: URL + '/works.json',
        }).then(response => {
            //console.log(response.data)
            dispatch(setFetchedData(response.data))
        })
    }
}

export const addProperty = (data) => {
    return {
        type: actionType.ADD_PROPERTY,
        property: data
    }
}

export const saveProperty = (details) => {
    console.log(details)
    return dispatch => {
        axios({
            method: 'post',
            url: URL + '/works.json',
            data: { worksDetails: details,
                    rooms: {} }
        }).then(response => {
            console.log('Property has saved!', response)
        })
    }
}

export const slectedProperty = (property) => {
    return {
        type: actionType.SELECTED_PROPERTY,
        payload: property
    }
}

export const setUpdatedProperty = (property, id) => {
    console.log(property)
    return {
        type: actionType.UPDATE_PROPERTY,
        payload: property,
        id: id
    }
}

export const updateProperty = (details, property) => {
    return dispatch => {
        axios({
            method: 'put',
            url: URL + `/works/${property.id}.json`,
            data: { worksDetails: details,
                rooms: {...property.rooms} }
        }).then(response => {
            console.log(response);
            dispatch(setUpdatedProperty(response.data, property.id))
        })
    }
}

export const deleteProperty = (id, list) => {
    //console.log(id)
    //console.log(list)
    let newList = {...list};
    delete newList[id]
    return {
        type: actionType.DELETE_PROPERTY,
        payload: newList
    }
}

export const removeProperty = (id, list) => {
    console.log('removing from database')
    return dispatch => {
        axios({
            method: 'delete',
            url: URL + `/works/${id}.json`,
        }).then(response => {
            console.log(response);
            dispatch(deleteProperty(id, list))
        })
    }
}

//-----------------------------------------------------------------------------------

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