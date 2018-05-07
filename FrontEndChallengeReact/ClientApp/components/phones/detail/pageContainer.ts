import * as React from 'react';
import { connect } from 'react-redux';
import { State } from '../../../reducers';
import { PhoneDetailPage } from './page';
import { getPhoneAction } from './actions/getPhone';

const mapStateToProps = (state: State) => ({
    phone: state.phone
});

const mapDispatchToProps = (dispatch: any) => ({
    getPhone: (id: number) => dispatch(getPhoneAction(id))
});

export const PhoneDetailContainer = connect(
    mapStateToProps,
    mapDispatchToProps)(PhoneDetailPage)