import React from 'react';
import { simpleRestClient, Admin, Resource } from 'admin-on-rest'
import { PostList, PostEdit, PostCreate } from './posts';
import { UserList } from './users';

const App = () => (
    <Admin restClient={simpleRestClient('http://localhost/api')}>
        <Resource name="cards" list={PostList} edit={PostEdit} create={PostCreate} />
        <Resource name="tags" list={UserList} />
    </Admin>
);

export default App;