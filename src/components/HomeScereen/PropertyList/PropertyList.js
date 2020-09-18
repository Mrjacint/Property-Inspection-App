import React from 'react';
import Card from 'react-bootstrap/Card';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import * as action from '../../../store/actions/actions';
import classes from './PropertyList.module.css';

const PropertyList = (props) => {

    //console.log(props)

    // let works = Object.keys(props.list).reverse();
    // let arrayList = [];
    // for ( let item in works) {
    //     let r = {};
    //     r = works[item].rooms ? works[item].rooms : {}
    //     arrayList.push({
    //         id: item,
    //         worksDetails: works[item].worksDetails,
    //         rooms: r
    //     })
    // }
    let property =[];

    const handleClick = (item) => {
        props.onSelectedItem(item)
        //props.clicked(item);
    }

    if(props.workList) {
        let arrayworkList = [];
        for ( let item in props.workList) {
            let r = {};
            r = props.workList[item].rooms ? props.workList[item].rooms : {}
            arrayworkList.push({
                id: item,
                worksDetails: props.workList[item].worksDetails,
                rooms: r
            })
        }
        arrayworkList.reverse();
        // property = props.workList.map(item => {
        property = arrayworkList.map(item => {
                return (
                    <Link 
                        to="/property" 
                        key={item.id}
                        className={classes.link} >
                        <Card 
                            className="m-1" 
                            onClick={() => handleClick(item)} >
                            <Card.Body>
                                <p>{item.worksDetails.clientAddress}</p>
                                {/* <span>{item.expectedCleaningDate}</span> */}
                            </Card.Body>
                        </Card>
                    </Link>
                )
            })
    }
//     if(props.list) {
//         let arrayList = [];
//         for ( let item in props.list) {
//             let r = {};
//             r = props.list[item].rooms ? props.list[item].rooms : {}
//             arrayList.push({
//                 id: item,
//                 worksDetails: props.list[item].worksDetails,
//                 rooms: r
//             })
//         }
//         arrayList.reverse();
// //        console.log(arrayList)
//         // property = props.list.map(item => {
//         property = arrayList.map(item => {
//                 return (
//                     <Card className="m-1" onClick={() => props.clicked(item)}>
//                         <Card.Body>
//                             <p>{item.worksDetails.clientAddress}</p>
//                             {/* <span>{item.expectedCleaningDate}</span> */}
//                         </Card.Body>
//                     </Card>
//                 )
//             })
//     }


    return (
        <div>
            <div className="text-center">
                <h4>Property List</h4>
            </div>
            {property}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        workList: state.list
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSelectedItem: (item) => dispatch(action.slectedProperty(item))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PropertyList);