import React from 'react';
import { List, Edit, Create, Datagrid, ReferenceField, TextField, EditButton, DisabledInput, LongTextInput, ReferenceInput, SelectInput, SimpleForm, TextInput } from 'admin-on-rest/lib/mui';

export const CardList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <ReferenceField label="Tag" source="id" reference="tags">
                <TextField source="name" />
            </ReferenceField>
            <TextField source="title" />
            <TextField source="summary" />
            <EditButton />
        </Datagrid>
    </List>
);

const CardTitle = ({ record }) => {
    return <span>Card {record ? `"${record.title}"` : ''}</span>;
};

export const CardEdit = (props) => (
    <Edit title={<CardTitle />} {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <ReferenceInput label="Tag" source="id" reference="tags">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="title" />
            <LongTextInput source="summary" />
        </SimpleForm>
    </Edit>
);

export const CardCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput label="Tag" source="id" reference="tags" allowEmpty>
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="title" />
            <LongTextInput source="summary" />
        </SimpleForm>
    </Create>
);