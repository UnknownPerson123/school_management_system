import React from 'react';
import {
    TextField,
} from '@material-ui/core';
import {className} from "postcss-selector-parser";
interface Props {
    label:string
    name:string
    value:string
    handleChange:any
    handleBlur:any
    touched:boolean | undefined
    errors:string | undefined
}
const TextFields = ({label, name, value, handleChange, handleBlur, touched, errors}:Props) => {
    const classf = `focus:outline-1 p-2 border rounded-lg w-full ${
        touched && errors ? 'border-red-600' : ''
    }`;
    return (
        <>
            <TextField
                error={!!errors && !!touched}
                label={label}
                variant="outlined"
                name={name}
                value={value}
                onChange={handleChange}
                onBlur={handleBlur}
                style={{ marginBottom: '1rem' }}
            />
        </>
    );
};

export default TextFields;