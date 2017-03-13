import React, { PropTypes } from 'react'
import { 
    List, Edit, Create, Datagrid, TextField, EditButton, 
    DisabledInput, LongTextInput, SimpleForm, 
    TextInput, DeleteButton
} from 'admin-on-rest/lib/mui'
import Chip from 'material-ui/Chip'
import get from 'lodash.get'

const MultipleTagField = ({ source, record = {} }) => {
    const tags = get(record, source)
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {tags.map(tag => 
                <Chip key={tag.id} style={{ margin: 4 }}>{tag.name}</Chip>
            )}
        </div>
    )
}
MultipleTagField.propTypes = {
    label: PropTypes.string,
    source: PropTypes.string.isRequired,
    record: PropTypes.object,
};

export const CardList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="slug" />
            <TextField source="title" />
            <TextField source="summary" />
            <MultipleTagField source="tags" />
            <EditButton />
            <DeleteButton />
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
            <TextInput source="title" />
            <TextInput source="summary" />
            <TextInput source="tagNames" />
            <LongTextInput source="content" />
        </SimpleForm>
    </Edit>
);

export const CardCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="slug" />
            <TextInput source="title" />
            <TextInput source="summary" />
            <TextInput source="tagNames" />
            <LongTextInput source="content" />
        </SimpleForm>
    </Create>
);