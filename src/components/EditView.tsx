import React from 'react';
import Field from './Field';
import '../styles/EditView.css';
import {EditViewProps} from "../types"

const EditView: React.FC<EditViewProps> = ({ fields, onChange }) => {
    return (
        <form>
            {fields.map((field) => (
                <Field key={field.id} field={field} onChange={onChange} />
            ))}
            <button type="submit">Сохранить</button>
        </form>
    );
};

export default EditView;
