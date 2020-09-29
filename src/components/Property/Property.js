import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import PropertyDetails from './PropertyDetails/PropertyDetails';
import AddRoom from './AddRoom/AddRoom';
import * as actions from '../../store/actions';
import Rooms from './Rooms/Rooms';
import nextRoomNumber from './../../utility/nextRoomNumber/nextRoomNumber';

const Property = (props) => {

    console.log(props)

    let renderProperty = <Redirect to="/" />;
    let roomNumber;

    const deleteProperty = (id) => {
        console.log(id)
        props.onDeleteProperty(id, props.list)
    }

    if (props.property) {
        renderProperty = (
            <div>
                <PropertyDetails
                    property={props.property} 
                    deleteProperty={deleteProperty} />
            </div>

        )
    }
   
    if (props.property) {
        roomNumber = nextRoomNumber(props.property)
    }

    return (
        <div>
            <Link to="/" className="btn btn-light btn-sm" >Back</Link>
            <div>
                {renderProperty}
            </div>
            <div>
                <Rooms />
            </div>
            <div className="">
                <AddRoom 
                    roomNumber = { roomNumber } />
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        list: state.propertyReducer.list,
        property: state.propertyReducer.selected
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onDeleteProperty: (id, list) => {dispatch(actions.removeProperty(id, list))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Property);