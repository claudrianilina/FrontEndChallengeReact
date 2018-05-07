import * as React from 'react';
import { connect } from 'react-redux';
import { State } from '../../reducers';
import { GridSpinnerComponent } from './gridSpinner';

const mapStateToProps = (state: State) => ({
    showSpinner: state.http.inProgress,
});

export const GridSpinnerContainer = connect(
    mapStateToProps,
)(GridSpinnerComponent);
