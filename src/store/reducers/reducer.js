import * as actionTypes from '../actions/actionsType';

const initalState = {
    list: null,
    selected: null
}
const reducer = (state = initalState, action) => {
    switch (action.type) {
        case actionTypes.SET_LIST:
            return {
                ...state, list: action.payload
            };
        case actionTypes.SELECTED_PROPERTY:
            return {
                ...state, selected: action.payload
            }
        case actionTypes.UPDATE_PROPERTY:
            //console.log(action.id)
            return {
                ...state, 
                list: {...state.list, [action.id]: action.payload},
                selected: {...state.selected, worksDetails: action.payload.worksDetails}
            }
        case actionTypes.DELETE_PROPERTY:
            return {
                ...state, 
                list: action.payload,
                selected: null
            }

        case actionTypes.ADD_ROOM:
            //console.log('reducer')
            //console.log(action)
            return {
                ...state, 
                list: {
                    ...state.list, 
                    [action.id]: {
                        ...state.list[action.id], 
                        rooms: action.payload 
                    } 
                },
                selected: {
                    ...state.selected,
                    rooms: action.payload
                }
            }
        case actionTypes.DELETE_ROOM:
            console.log(action)
            return {
                ...state,
                list: {
                    ...state.list,
                    [action.propertyId]: {
                        ...state.list[action.propertyId],
                        rooms: action.updatedRooms
                    }
                },
                selected: {
                    ...state.selected,
                    rooms: action.updatedRooms
                }
            }
        default: return state;
    }
}

export default reducer;