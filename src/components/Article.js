import React, { PropTypes } from 'react'
import { 
    List, Edit, Create, Datagrid, TextField, EditButton, 
    DisabledInput, LongTextInput, SimpleForm, 
    TextInput
} from 'admin-on-rest/lib/mui'
import MarkdownInput from './MarkdownInput'
import DeleteButton from './DeleteButton'
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

export const ArticleList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="slug" />
            <TextField source="title" />
            <TextField source="summary" />
            <MultipleTagField source="tags" />
            <EditButton />
            <DeleteButton resource="articles" />
        </Datagrid>
    </List>
);

const ArticleTitle = ({ record }) => {
    return <span>Article {record ? `"${record.title}"` : ''}</span>;
};

export const ArticleEdit = (props) => (
    <Edit title={<ArticleTitle />} {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <TextInput source="title" />
            <TextInput source="summary" />
            <TextInput source="tagNames" />
            <LongTextInput source="markdown" />
            <MarkdownInput source="markdown" />
        </SimpleForm>
    </Edit>
);

export const ArticleCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="slug" />
            <TextInput source="title" />
            <TextInput source="summary" />
            <TextInput source="tagNames" />
            <LongTextInput source="markdown" />
            <MarkdownInput source="markdown" />
        </SimpleForm>
    </Create>
);