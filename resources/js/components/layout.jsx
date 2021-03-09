import React from 'react'
import { InertiaLink } from '@inertiajs/inertia-react'
import {Helmet} from "react-helmet";

export default function Layout(props) {
    // console.log(props)
    const {children} = props;
    const {title} = children.props;

    return (
        <div>
            <Helmet>
                <title>{title}</title>
            </Helmet>
            <ul>
                <li><InertiaLink href="/">Home</InertiaLink></li>
                <li><InertiaLink href="/user">User</InertiaLink></li>
            </ul>
            <input/>
            {children}
        </div>
    )
}
