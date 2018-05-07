import * as React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { Layout } from './components/Layout';
import { PhonesListContainer } from './components/phones/list/pageContainer';
import { PhoneDetailContainer } from './components/phones/detail/pageContainer';
import { NotFound } from './components/404';
export const routes = <Layout>
    <Switch>
        <Route exact path='/' component={PhonesListContainer as any} />
        <Route exact path='/phones' component={PhonesListContainer as any} />
        <Route exact path='/phones/details/:id' component={PhoneDetailContainer as any} />
        <Route exact path="*" component={NotFound} />
    </Switch>
</Layout>;
