import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
//import axios from 'axios';
//import { Link } from 'react-router-dom';

import Input from './../../UI/Inputs/Input';
import TextArea from './../../UI/Inputs/TextArea';
import Modal from '../../UI/Modal/Modal';
import * as actions from '../../../store/actions';

const PropertyDetails = (props) => {

    let date = new Date();
    let today = date.toISOString().substr(0, 10)

    const [details, setDetails] = useState({
            id: null,
            detailsID: null,
            clientName: '',
            clientAddress: '',
            clientEmail: '',
            clientPhone: '',
            inspectionDate: today,
            expectedCleaningDate: '',
            detailsNote: ''
    })
    //const [editDetails, setEditDetails] = useState(false)
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        if (props.buttonType === 'edit') {
            setDetails(props.property.worksDetails);
            //setEditDetails(true);
        }
        
        if (props.selectedProperty) {
            console.log(props.selectedProperty)
            setDetails(props.selectedProperty.worksDetails)
        }
    }, [props])

    console.log(props)
    console.log(details)


    const save = () => {
        if (props.selectedProperty) {
            props.onEditProperty(details, props.selectedProperty)
            // axios({
            //     method: 'put',
            //     url: `https://jacint-portfolio.firebaseio.com/works/${props.selectedProperty.id}.json`,
            //     data: { worksDetails: details,
            //         rooms: {...props.selectedProperty.rooms} }
            // }).then(response => {
            //     console.log(response)
            // })
        }else {
            props.onSaveNewProperty(details)
        }
        
        props.history.goBack()
        // if(editDetails) {
        //     axios({
        //         method: 'put',
        //         url: `https://jacint-portfolio.firebaseio.com/works/${details.id}.json`,
        //         data: { worksDetails: details,
        //                 rooms: {} }
        //     }).then(response => {
        //         console.log(response)
        //         props.select('Property')
        //         props.passProperty(response.data)
        //     })
        // }
        // else {
        //     axios({
        //         method: 'post',
        //         url: 'https://jacint-portfolio.firebaseio.com/works.json',
        //         data: { worksDetails: details,
        //                 rooms: {} }
        //     }).then(response => {
        //         console.log(response)
        //         props.select('Home')
        //     })
        // }
        //props.select('Home')
    }

    const handleDetailsSubmit = (event) => {
        event.preventDefault();
        setShowModal(true)
    }

    const handleInput = (event) => {
        setDetails({ ...details, [event.target.name]: event.target.value })
    }

    let summary = 
            <div>
                <div><span>Name: </span>{details.clientName}</div>
                <div><span>Address: </span>{details.clientAddress}</div>
                <div><span>Email: </span>{details.clientEmail}</div>
                <div><span>Phone: </span>{details.clientPhone}</div>
                <div><span>Inspection Date: </span>{details.inspectionDate}</div>
                <div><span>Cleaning Date: </span>{details.expectedCleaningDate}</div>
                <div><span>Note: </span>{details.detailsNote}</div>
            </div>;

    const handleModal = () => {
        setShowModal(false)
    }

    return (
        <div>
            <Modal
                title="Please check details"
                showModal={handleModal}
                show={showModal}
                save={save}
                >{summary}
            </Modal>
            <div onClick={() => props.history.goBack()} className="btn btn-light btn-sm" >Back</div>
            {/* <Link to="/" className="btn btn-light btn-sm" >Back</Link> */}
            <form onSubmit={handleDetailsSubmit}>
                <div>
                    <h5>Property Details</h5>
                </div>
                <div className="form-group">
                    <label>Client Name *</label>
                    <Input
                        //className="form-control"
                        type="text"
                        name="clientName"
                        placeholder="Enter client name"
                        change={event => handleInput(event)}
                        //onChange={event => setDetails({ ...details, clientName: event.target.value })}
                        value={details.clientName}
                        required />
                </div>
                <div className="form-group">
                    <label>Client Address *</label>
                    <Input
                        type="text"
                        name="clientAddress"
                        placeholder="Enter client address"
                        change={event => handleInput(event)}
                        value={details.clientAddress}
                        required />
                </div>
                <div className="form-group">
                    <label>Client Email Address *</label>
                    <Input
                        type="text"
                        name="clientEmail"
                        placeholder="Enter client email address"
                        change={event => handleInput(event)}
                        value={details.clientEmail}
                    />
                </div>
                <div className="form-group">
                    <label>Phone Number</label>
                    <Input
                        type="tel"
                        name="clientPhone"
                        placeholder="Enter client contact phone number"
                        change={event => handleInput(event)}
                        value={details.clientPhone} />
                </div>
                <div className="form-group">
                    <label>Inspection Date</label>
                    <Input
                        type="date"
                        name="inspectionDate"
                        change={event => handleInput(event)}
                        value={details.inspectionDate} />
                </div>
                <div className="form-group">
                    <label>Cleaning Date *</label>
                    <Input
                        type="date"
                        name="expectedCleaningDate"
                        change={event => handleInput(event)}
                        value={details.expectedCleaningDate}
                        required />
                </div>
                <div className="form-group">
                    <label>Note</label>
                    <TextArea
                        className="form-control"
                        type="txt"
                        name="detailsNote"
                        placeholder="Enter your note"
                        change={event => handleInput(event)}
                        value={details.detailsNote} />
                </div>
                <div>
                    <button
                        className="btn btn-primary"
                        onClick={() => setDetails({ ...details, detailsID: Date.now() })}>
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        selectedProperty: state.propertyReducer.selected
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSaveNewProperty: details => dispatch(actions.saveProperty(details)),
        onEditProperty: (details, property) => dispatch(actions.updateProperty(details, property))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PropertyDetails);