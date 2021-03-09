
require('./bootstrap');
import { InertiaApp } from '@inertiajs/inertia-react'
import React from 'react'
import { render } from 'react-dom'
import Layout from "./components/layout";

const app = document.getElementById('app')

render(
    <InertiaApp
        initialPage={JSON.parse(app.dataset.page)}
        resolveComponent={ name =>
            import(`./pages/${name}`)
                // .then(module => module.default)
                .then(({ default: page }) => {
                    if (page.layout === undefined) {
                        page.layout = (page) => <Layout children={page} />
                    }
                    return page
                })
        }
    />,
    app
)
