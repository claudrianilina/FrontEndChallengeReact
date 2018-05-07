import { PhoneDetail, PhoneCollection, Phone } from '../model/phone'
import {actionTypes } from '../common/constants/actionTypes'
const createEmptyPhone = (): PhoneDetail => {
    return {
        id: 0,
        title: "",
        image: "",
        color: "",
        description: "",
        memory: "",
        price: ""
    }
}

const createEmptyPhoneList = (): Phone => {
    return {
        id: 0,
        title: "",
        image: ""
    }
}

export const phoneReducer = (state = createEmptyPhone(), action) => {
    switch (action.type) {
        case actionTypes.GET_PHONE:
            return handleGetPhoneCompleted(state, action.payload);
    }

    return state;
}

export const phoneListReducer = (state = [createEmptyPhoneList()], action) => {
    switch (action.type) {
        case actionTypes.GET_PHONES:
            return handleGetPhonesCompleted(state, action.payload);
    }

    return state;
}

const handleGetPhoneCompleted = (state: PhoneDetail, payload: PhoneDetail) => {
    return payload;
}

const handleGetPhonesCompleted = (state: Phone[], payload: Phone[]) => {
    return payload;
}