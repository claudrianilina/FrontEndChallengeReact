import * as React from 'react';
import { SiteProps } from "../model/Config";
import {NavBar } from './nav';
export interface LayoutProps {
    children?: React.ReactNode;
}
export class Layout extends React.Component<LayoutProps> {
    public render() {
        return (
            
            <div className="principal">
                <div>
                    <NavBar/>
                    <div className="ms-Grid-col ms-sm12 ms-lg3 ms-xl2">
                    </div>
                    <div className="ms-Grid-col ms-sm12 ms-lg8 ms-xl9 principal-container">
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}