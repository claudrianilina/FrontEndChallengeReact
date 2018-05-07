import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';
import { PhoneDataGrid } from './grid';
import { Phone, PhoneCollection, PhoneDetail } from '../../../model/phone';
import { SpinnerContainer } from "../../../common/spinner";

export interface IProps {
    phones: Phone[];
    getPhones: () => Promise<Phone[]>;
}

export class PhoneListPage extends React.Component<RouteComponentProps<{}> & IProps, any>{
    constructor() {
        super();
        this.state = {
        }
    }

    public componentDidMount() {
        this.props.getPhones();
    }

    public render() {
        let grid = null;

        let phones: Phone[] = [];
        if (this.props.phones != null) {
            phones = this.props.phones
        }
        grid = <PhoneDataGrid phones={phones}/>
        return (
            <div >
                <SpinnerContainer/>
                <div className="ms-Grid-row">
                    <h1>Mobile Phones Available</h1>
                </div>
                <div className="ms-Grid-row">
                    <hr className="separator ms-hiddenMdDown ms-sm12" />
                    <div className="ms-sm12">
                        <table className="table">
                            <thead>
                                <tr className="">
                                    <th scope="row">
                                        <p className="ms-hiddenMdDown">Model</p>
                                    </th>
                                    <th scope="row">
                                        <p className="ms-hiddenMdDown">Image</p>
                                    </th>
                                    <th scope="row">
                                    </th>
                                </tr>
                            </thead>
                            {grid}
                        </table>
                    </div>
                </div>
            </div >
        );
    }
}