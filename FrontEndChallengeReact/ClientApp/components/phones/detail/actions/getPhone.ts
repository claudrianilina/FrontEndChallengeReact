import { actionTypes } from '../../../../common/constants/actionTypes';
import { PhonesApi } from '../../../../api/phones/index';
import { Phone, PhoneCollection, PhoneDetail } from '../../../../model/phone';
import { httpCallStartAction } from '../../../../middleware/http/actions';

export const getPhoneAction = (id: number) => (dispatch) => {
    dispatch(httpCallStartAction());
    PhonesApi.GetById(id).then((content) => {
        dispatch(getPhonesCompleted(content));
    });
};
const getPhonesCompleted = (phoneDetail
    : PhoneDetail) => ({
        type: actionTypes.GET_PHONE,
        payload: phoneDetail,
        meta: {
            httpEnd: true,
        }
    });
