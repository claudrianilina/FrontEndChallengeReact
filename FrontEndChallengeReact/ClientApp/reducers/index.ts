import { combineReducers } from "redux";
import { PhoneDetail, PhoneCollection, Phone } from '../model/phone';
import { phoneListReducer, phoneReducer } from './phones';
import { HttpState, httpReducer } from "../reducers/http";
export interface State {
    phone: PhoneDetail,
    phones: Phone[],
    http: HttpState;
}

export const state = combineReducers<State>({
    phone: phoneReducer,
    phones: phoneListReducer,
    http: httpReducer
});