import { actionTypes } from '../../../../common/constants/actionTypes';
import { PhonesApi } from '../../../../api/phones/index';
import { Phone, PhoneCollection, PhoneDetail } from '../../../../model/phone';
import { httpCallStartAction } from '../../../../middleware/http/actions';

export const getPhonesAction = () => (dispatch) => {
    dispatch(httpCallStartAction());
    PhonesApi.Get().then((content) => {
        dispatch(getPhonesCompleted(content));
    });
};
const getPhonesCompleted = (phoneCollection
    : Phone[]) => ({
        type: actionTypes.GET_PHONES,
        payload: phoneCollection,
        meta: {
            httpEnd: true,
        }
    });
