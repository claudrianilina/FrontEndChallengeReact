import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';
import { Phone, PhoneCollection, PhoneDetail } from '../../../model/phone';
import { SpinnerContainer } from "../../../common/spinner";
export interface IProps {
    phone: PhoneDetail;
    getPhone: (id: number) => Promise<PhoneDetail>;
}

export class PhoneDetailPage extends React.Component<RouteComponentProps<{}> & IProps, any>{
    constructor() {
        super();
        this.state = {
        }
    }

    public componentDidMount() {
        if ((this.props.match.params['id'] !== undefined) && (this.props.match.params['id'] !== null)) {
            this.props.getPhone(this.props.match.params['id']);
        }
    }

    public render() {

        let phone: PhoneDetail = null;
        if (this.props.phone != null) {
            phone = this.props.phone
        }
        return (
            <div >
                <SpinnerContainer />
                <div className="ms-Grid-row">
                    <h1>Review: {phone.title}</h1>
                </div>
                <div className="ms-Grid-row">
                    <hr className="separator ms-hiddenMdDown ms-sm12" />
                    <ul className="list-group mobile-detail-list">
                        <li className="list-group-item"><strong>Model:</strong> {phone.title}</li>
                        <li className="list-group-item"><strong>Price:</strong> {phone.price}</li>
                        <li className="list-group-item"><p><strong>Image:</strong></p>
                        <img className="mobile-image" src={phone.image} ></img></li>
                        <li className="list-group-item"><strong>Description:</strong> {phone.description}</li>
                        <li className="list-group-item"><strong>Color:</strong> {phone.color}</li>
                        <li className="list-group-item"><strong>Memory:</strong> {phone.memory}</li>
                    </ul>
                </div>
                <Link className="btn-back" to='/phones'>Go back to list</Link>
            </div >
        );
    }
}