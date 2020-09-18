import React from 'react';
import { Link } from 'react-router-dom';

const AddProperty = (props) => {
    //console.log(props)

    // const handleClick = () => {
    //     props.passButtonType('add')
    //     props.screen('PropertyDetailsForm')
    // }

    return (
        <div className="p-2">
            <Link
                to="/PropertyDetailsForm"
                className="btn btn-primary"
                //onClick={() =>handleClick() }
                //add={true} 
                >
                Add Property
            </Link>

            {/* <button
                type="button"
                className="btn btn-primary"
                onClick={() =>handleClick() }
                //add={true} 
                >
                Add Property
            </button> */}
        </div>
    )
}

export default AddProperty;