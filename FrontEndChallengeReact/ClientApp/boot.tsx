import 'bootstrap';
import 'core-js/fn/object/assign';
import 'core-js/fn/promise';
import 'core-js/es6/map';
import 'core-js/es6/set';
import 'core-js/es6/string';
import 'core-js/fn/array';
import * as es6 from 'es6-promise';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ConnectedRouter } from 'react-router-redux'
import { AppContainer } from 'react-hot-loader';
import { BrowserRouter } from 'react-router-dom';
import * as RoutesModule from './routes';
import { Provider } from 'react-redux';
import { store } from './store';
import { SiteProps } from './model/Config';
import './css/site.css';

import { createBrowserHistory } from 'history';
const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href')!;
export const history = createBrowserHistory({ basename: baseUrl });
let routes = RoutesModule.routes;

function renderApp() {
    // This code starts up the React app when it runs in a browser. It sets up the routing
    // configuration and injects the app into a DOM element.
    let app = document.getElementById('react-app');
    let settings = document.getElementById('settings');
    let url = settings.dataset.url;
    SiteProps.SiteURL = url;
    es6.polyfill();


    ReactDOM.render(
        <AppContainer>
            <Provider store={store}>
                <ConnectedRouter children={routes} history={history} />
            </Provider>
        </AppContainer>,
        document.getElementById('react-app')
    );
}

renderApp();

// Allow Hot Module Replacement
if (module.hot) {
    module.hot.accept('./routes', () => {
        routes = require<typeof RoutesModule>('./routes').routes;
        renderApp();
    });
}
