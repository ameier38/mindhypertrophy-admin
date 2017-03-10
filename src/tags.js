import React from 'react';
import { List, Datagrid, TextField } from 'admin-on-rest/lib/mui';

export const TagList = (props) => (
    <List title="All tags" {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
        </Datagrid>
    </List>
);