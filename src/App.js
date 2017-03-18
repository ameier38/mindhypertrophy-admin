import React from 'react';
import { Admin, Resource } from 'admin-on-rest'
import authClient from './authClient'
import { CardList, CardEdit, CardCreate } from './cards';
import { TagList, TagEdit, TagCreate } from './tags';
import restClient from './restClient'

const adminConfig = {
    title: "Mind Hypertrophy Admin",
    restClient,
    authClient
}

const App = () => (
    <Admin {...adminConfig} >
        <Resource name="cards" list={CardList} edit={CardEdit} create={CardCreate} />
        <Resource name="tags" list={TagList} edit={TagEdit} create={TagCreate} />
    </Admin>
);

export default App;