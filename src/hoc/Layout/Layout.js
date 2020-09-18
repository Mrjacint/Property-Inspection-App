import React, { Fragment } from 'react';
import Header from '../../components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

const Layout = props => {
    return(
        <Fragment>
            <Header />
            <main>
                <Container>
                    {props.children}
                </Container>
            </main>
        </Fragment>
    );
};

export default Layout;