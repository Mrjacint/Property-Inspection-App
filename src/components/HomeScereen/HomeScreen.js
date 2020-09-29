import React, { useEffect } from 'react';
import { connect } from 'react-redux';
//import axios from 'axios';

import AddProperty from '../AddProperty/AddProperty';
import PropertyList from './PropertyList/PropertyList';
import classes from './HomeScreen.module.css';
import * as actions from '../../store/actions';

const HomeScreen = (props) => {

    console.log(props)
    
    useEffect(() => {
        if (!props.list) {
            props.onSetList();
        } 
        
    }, [props])

    return (
        <div className="text-center">
            <h3>Welcome!</h3>
            <hr />
            <div className={classes.propertyList}>
                <PropertyList />
            </div>
            <AddProperty 
                screen={props.select} 
                passButtonType={props.passButtonType} />
        </div>
    )
}
const mapStateToProps = state => {
    console.log(state)
    return {
        list: state.propertyReducer.list
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSetList: () => { dispatch(actions.fetchData()) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);