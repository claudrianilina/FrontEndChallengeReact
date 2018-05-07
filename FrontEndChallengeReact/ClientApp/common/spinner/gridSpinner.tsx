import * as React from 'react';
import '../../css/components/spinner.css';

interface Props {
    showSpinner: boolean;
}

export const GridSpinnerComponent: React.StatelessComponent<Props> = (props) => {
    return (
        props.showSpinner ?
            <div className="gridSpinnerOverlay">
                <div className="gridSpinner">
                    <span>Loading</span>
                </div>
            </div> :
            null
    );
};