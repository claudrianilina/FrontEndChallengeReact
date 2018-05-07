import * as React from 'react';
import { connect } from 'react-redux';
import { State } from '../../../reducers';
import { PhoneListPage } from './page';
import { getPhonesAction } from './actions/getPhones';

const mapStateToProps = (state: State) => ({
    phones: state.phones
});

const mapDispatchToProps = (dispatch: any) => ({
    getPhones: () => dispatch(getPhonesAction())
});

export const PhonesListContainer = connect(
    mapStateToProps,
    mapDispatchToProps)(PhoneListPage)