import * as React from 'react';
import '../../css/components/spinner.css';
interface Props {
    showSpinner: boolean;
}

export const SpinnerComponent: React.StatelessComponent<Props> = (props) => {
    return (
        props.showSpinner ?
            <div>
                <div className="spinnerOverlay">
                    <div className="spinner">
                        <span>Loading</span>
                    </div>
                </div>
            </div> :
            null
    );
};
