/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { ChangeEvent } from 'react';
import "./Payment.css"

interface TextInputProps {
    label: string;
    type: string;
    id: string;
    name: string;
    value: string;
    placeholder: string;
    className: string;
}

const TextInput: React.FC<TextInputProps> = ({
    label,
    type,
    id,
    name,
    value,
    placeholder,
    className,
}) => {
    return (
        <div className="formNomarl">
            <input
                type={type}
                id={id}
                name={name}
                value={value}
                placeholder={placeholder}
                className={className}
            />
        </div>
    );
};

export default TextInput;