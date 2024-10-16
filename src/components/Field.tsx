import React from 'react';
import {FieldProps} from "../types"

const Field: React.FC<FieldProps> = ({ field, onChange }) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        onChange(field.id, e.target.value);
    };

    switch (field.type) {
        case 'text':
        case 'number':
        case 'date':
            return (
                <div>
                    <label>{field.label}:</label>
                    <input
                        type={field.type}
                        value={field.value}
                        onChange={handleChange}
                        required={field.required}
                    />
                </div>
            );
        case 'textarea':
            return (
                <div>
                    <label>{field.label}:</label>
                    <textarea
                        value={field.value}
                        onChange={handleChange}
                        required={field.required}
                    />
                </div>
            );
        case 'select':
            return (
                <div>
                    <label>{field.label}:</label>
                    <select value={field.value} onChange={handleChange} required={field.required}>
                        <option value="">Выберите</option>
                        {field.options?.map((option, idx) => (
                            <option key={idx} value={option}>{option}</option>
                        ))}
                    </select>
                </div>
            );
        case 'checkbox-group':
            return (
                <div>
                    <label>{field.label}:</label>
                    {field.options?.map((option, idx) => (
                        <div key={idx}>
                            <label>
                                <input
                                    type="checkbox"
                                    value={option}
                                    checked={field.value.includes(option)}
                                    onChange={(e) => {
                                        const newValue = field.value.includes(option)
                                            ? field.value.replace(option, '').trim()
                                            : `${field.value} ${option}`.trim();
                                        onChange(field.id, newValue);
                                    }}
                                />
                                {option}
                            </label>
                        </div>
                    ))}
                </div>
            );
        case 'radio-group':
            return (
                <div>
                    <label>{field.label}:</label>
                    {field.options?.map((option, idx) => (
                        <div key={idx}>
                            <label>
                                <input
                                    type="radio"
                                    name={`radio-${field.id}`}
                                    value={option}
                                    checked={field.value === option}
                                    onChange={handleChange}
                                />
                                {option}
                            </label>
                        </div>
                    ))}
                </div>
            );
        default:
            return null;
    }
};

export default Field;
