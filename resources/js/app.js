
require('./bootstrap');
import { InertiaApp } from '@inertiajs/inertia-react'
import React from 'react'
import { render } from 'react-dom'
import Layout from "./components/layout";
import { InertiaProgress } from '@inertiajs/progress'

InertiaProgress.init({
  // The delay after which the progress bar will
  // appear during navigation, in milliseconds.
  delay: 300,

  // The color of the progress bar.
  color: '#ddda22',

  // Whether to include the default NProgress styles.
  includeCSS: true,

  // Whether the NProgress spinner will be shown.
  showSpinner: true,
})

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
