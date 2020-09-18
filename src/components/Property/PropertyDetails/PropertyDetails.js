import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
// import * as actions from '../../../store/actions/actions';

import editIkon from '../../../Assests/editIkon';

const PropertyDetails = (props) => {
    const [collapse, setCollapse] = useState("collapse")
    
    const handleCollapse = () => {
        collapse === "collapse" ? setCollapse("collapse show") : setCollapse("collapse");
    }
    
    //console.log(props)

    const handleDeleteButton = () => {
        //setShowModal(true);
        if(window.confirm('Are you sure to delete ' + props.property.worksDetails.clientAddress)) {
            props.deleteProperty(props.property.id)
        }
    }

    // const handleEditButton = () => {
    //     props.screen('PropertyDetailsForm')
    //     props.passProperty(props.property)
    //     props.passButtonType('edit')
    // }

    return (
        <div>
            <Card>
                <div className="text-center m-2"
                    onClick={handleCollapse}>
                    <h5>{props.property.worksDetails.clientAddress}</h5>
                </div>
                <div className={collapse}>
                    <div className="card-body">
                        <dl>
                            <dt>Client Name</dt><dd>{props.property.worksDetails.clientName}</dd>
                            <dt>Client Email</dt><dd>{props.property.worksDetails.clientEmail}</dd>
                            <dt>Client Tel.</dt><dd>{props.property.worksDetails.clientPhone}</dd>
                            <dt>Inspecton date</dt><dd>{props.property.worksDetails.inspectionDate}</dd>
                            <dt>Cleaning date</dt><dd>{props.property.worksDetails.expectedCleaningDate}</dd>
                            <dt>Note</dt><dd>{props.property.worksDetails.detailsNote}</dd>
                        </dl>
                    </div>
                    <div>
                        <Link 
                            to="/PropertyDetailsForm"
                            className="btn btn-success ml-2 mb-2 pb-2" >
                            {editIkon}
                        </Link>
                        {/* <button 
                            className="btn btn-success ml-2 mb-2"
                            onClick={handleEditButton} >
                            {editIkon}
                        </button> */}
                        <div 
                            className="btn btn-danger ml-2 mb-2"
                            onClick={handleDeleteButton} >
                            {/* onClick={() => props.deleteProperty(props.property.id)} > */}
                            {/* onClick={() => props.onDeleteProperty(props.property.id)} > */}
                                Delete
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    )
}

// const mapDispatchToProps = dispatch => {
//     return {
//         onDeleteProperty: id => {dispatch(actions.deleteProperty(id))}
//     }
// }

export default PropertyDetails;
// export default connect(null, mapDispatchToProps)(PropertyDetails);