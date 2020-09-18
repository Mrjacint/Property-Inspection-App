import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

import Modal from '../../UI/Modal/Modal';


const AddRoom = (props) => {
    const [showModal, setShowModal] = useState(false)
    const [modalDeatail, setModalDetails] = useState({
        title: '',
        body: {},
        button: ''
    })
    //console.log(props)

    const closeModal = () => {
        setShowModal(false)
    }

    let modal = (
        <Modal 
            title={modalDeatail.title}
            closeModal={closeModal}
            show={showModal} >
                {modalDeatail.body}
        </Modal>);

    const handelAddRoomButton = () => {
        setShowModal(true);
        setModalDetails({
            title: 'Please choose one',
            body: buttonList,
            button: ''
        })
    }

    let buttonList = 
        <div className="p-4">
            <div className="p-2">
                <Link to={{
                    pathname: '/property/room-form',
                    state: { roomNumber: props.roomNumber }
                }} >
                    <Button 
                        variant="primary" 
                        block >
                        Bedroom
                    </Button>
                </Link>
            </div>
            <div className="p-2">
                <Button variant="primary" block>Bathroom</Button>
            </div>
            <div className="p-2">
                <Button variant="primary" block>Kitchen</Button>
            </div>
        </div>;

    return (
        <div className="">
            {modal}
            <Button
                variant="primary"
                onClick={handelAddRoomButton}
                block >
                Add Room
            </Button>
        </div>
    )
}

export default AddRoom;