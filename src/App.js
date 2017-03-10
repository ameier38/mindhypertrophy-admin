import React from 'react';
import { simpleRestClient, fetchUtils, Admin, Resource } from 'admin-on-rest'
import authClient from './authClient'
import { CardList, CardEdit, CardCreate } from './cards';
import { TagList } from './tags';

const httpClient = (url, options) => {
    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
    }
    const token = localStorage.getItem('token')
    options.headers.set('Authorization', `Bearer ${token}`);
    return fetchUtils.fetchJson(url, options);
}

const restClient = simpleRestClient('http://localhost:5000/api', httpClient);

const App = () => (
    <Admin restClient={restClient} authClient={authClient}>
        <Resource name="cards" list={CardList} edit={CardEdit} create={CardCreate} />
        <Resource name="tags" list={TagList} />
    </Admin>
);

export default App;