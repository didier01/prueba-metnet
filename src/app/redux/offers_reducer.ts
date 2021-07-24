import { Action } from "@ngrx/store";
import * as ofertas from "../../assets/ofertas.json";
import { GET_DATA } from "./offers.actions";


// export function offersReducer (state = ofertas, action: Action) {   
//     switch (action.type) {
//         case GET_DATA:
//             return state;
//         default:
//             return state;
//     }
// }

let singleOffer = {};


export function offersReducer(state = singleOffer, action: Action) {
    console.log('reducer ' + singleOffer['id']);


    switch (action.type) {
        case GET_DATA:
            return state;
        default:
            return state;
    }
}

// Actions
export const getOffer = (offer) => async (dispatch, getState) => {
    console.log(offer);

    try {
        dispatch({
            type: GET_DATA,
            singleOffer: offer,
        })
    } catch (error) {
        console.log(error);
    }
}
// 
export function setID(offer) {
    let found = ofertas['default'].find(id => offer)
    singleOffer = found;    
}



