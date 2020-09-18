import React, { useEffect } from 'react';
import { connect } from 'react-redux';
//import axios from 'axios';

import AddProperty from '../AddProperty/AddProperty';
import PropertyList from './PropertyList/PropertyList';
import classes from './HomeScreen.module.css';
import * as actions from '../../store/actions/actions';

const HomeScreen = (props) => {

    //    const [list, setList] = useState([]);
    //const [listObject, setListObject] = useState(null);

    //console.log(props)
    
    useEffect(() => {
        if (!props.list) {
            props.onSetList();
        } 
        //props.onSetList();
        // axios({
        //     method: 'get',
        //     url: 'https://jacint-portfolio.firebaseio.com/works.json',
        // }).then(response => {
        //     console.log(response.data)
        //     setListObject(response.data)
            // let data = Object.keys(response.data).reverse();
            // console.log(data)

            //-----------------------------------------------------
            // const arrayList = [];
            // for ( let item in response.data) {
            //     let r = {};
            //     r = response.data[item].rooms ? response.data[item].rooms : {}
            //     arrayList.push({
            //         id: item,
            //         worksDetails: response.data[item].worksDetails,
            //         rooms: r

            //     })
            // }
            // arrayList.reverse();
            // setList(arrayList)
        // })
        
    }, [props])

    // const onClickHandler = (item) => {
    //     //console.log(item)
    //     props.select('Property')
    //     props.passProperty(item)
    // }
    return (
        <div className="text-center">
            <h3>Welcome!</h3>
            <hr />
            <div className={classes.propertyList}>
                {/* <PropertyList list={listObject} clicked={onClickHandler} /> */}
                <PropertyList 
                //clicked={onClickHandler} 
                />
            </div>
            <AddProperty screen={props.select} passButtonType={props.passButtonType} />

        </div>
    )
}

const mapStateToProps = state => {
    return {
        list: state.list
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSetList: () => { dispatch(actions.fetchData()) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);