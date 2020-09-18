import React from 'react';
import ModalElm from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const Modal = (props) => {
    //console.log(props)

    const saveButton = (
        <Button variant="primary" onClick={() => props.save()}>
            Save Changes
        </Button>);

    const deleteButton = (
        <Button variant="danger" onClick={() => props.delete()}>
            Save Changes
        </Button>);

    return (
        <ModalElm show={props.show} onHide={() => props.closeModal()}>
            <ModalElm.Header closeButton>
                <ModalElm.Title>{props.title}</ModalElm.Title>
            </ModalElm.Header>
            <ModalElm.Body>
                {props.children}
            </ModalElm.Body>
            <ModalElm.Footer>
                <Button variant="secondary" onClick={() => props.closeModal()}>
                    Close
                </Button>
                {props.save ? saveButton : null}
                {props.delete ? deleteButton : null}
            </ModalElm.Footer>
        </ModalElm>
    );
};

export default Modal;