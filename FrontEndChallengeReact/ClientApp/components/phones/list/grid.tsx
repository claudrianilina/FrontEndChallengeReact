import * as React from 'react';
import { Link } from 'react-router-dom';
import {PhoneCollection, Phone } from '../../../model/phone'
export interface IProps {
    phones: Phone[];
}

export class PhoneDataGrid extends React.Component<IProps, {}> {

    static contextTypes = {
        router: React.PropTypes.object
    }

    public render() {
        return (
            <tbody>
                {this.props.phones.map((item) => {

                    return <tr key={item.id}>
                        <td>{item.title}</td>
                        <td><img className="mobile-image" src={item.image} ></img></td>
                        <td><Link className="details" to={"/phones/details/" + item.id}>View more</Link></td>
                    </tr>
                })
                }
            </tbody>
        );
    }

    public handleRowClick(recordCompanyId: number) {
    }
}