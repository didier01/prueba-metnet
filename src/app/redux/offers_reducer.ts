import { Action } from "@ngrx/store";
import { GET_DATA } from "./offers.actions";
import * as ofertas from "../../assets/ofertas.json";
import { OfferInterface } from '../models/offer_interface';


export interface appState {
    offer: OfferInterface
}

export const initialState = {
    offer: {}
}

export function offersReducer(state: appState = initialState, action: Action) {
    // console.log(action);

    switch (action.type) {
        case GET_DATA:
            let id = action['payload'];
            return { ...state, offer: getItem(id) }
        // case 'ENGLISH':
        //     return { ...state, offer: action['payload'] }
        // case 'SPANISH':
        //     return { ...state, offer: action['payload'] }
        default:
            return state;
    }



    function getItem(id) {
        let found = ofertas['default'].find(item => item.id === id)
        console.log(found);
        return found;
    }
}


