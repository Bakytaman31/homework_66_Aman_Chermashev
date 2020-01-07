import React, {Fragment} from 'react';
import Navigation from "../Navigation/Navigation";

const Layout = props => (
    <Fragment>
        <Navigation/>
        <main>{props.children}</main>
    </Fragment>
);

export default Layout;