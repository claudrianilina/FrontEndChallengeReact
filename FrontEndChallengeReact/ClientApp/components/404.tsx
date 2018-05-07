import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Link } from 'react-router-dom';

export class NotFound extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return <div>
            <p className="not-found">404 - Not Found</p>
            <Link className="btn-back" to='/phones'>Go back to list</Link>
        </div>;
    }
}
