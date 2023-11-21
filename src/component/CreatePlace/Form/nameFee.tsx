// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { useState } from 'react';

interface NameFeeProps {
    onNameChange: (name: string) => void;
    onEntryFeeChange: (entryFee: number | undefined) => void;
}

const NameFee: React.FC<NameFeeProps> = ({ onNameChange, onEntryFeeChange }) => {
    const [inputValue, setInputValue] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [entryFee, setEntryFee] = useState<number | undefined>(undefined);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const rawValue = event.target.value.replace(/[^\d]/g, '');
        setInputValue(formatCurrency(rawValue));
        onEntryFeeChange(parseFloat(rawValue) / 100);
    };

    const formatCurrency = (rawValue: string): string => {
        const numericValue = parseInt(rawValue, 10) / 100;
        const formattedValue = numericValue.toLocaleString('en-NG', {
            style: 'currency',
            currency: 'NGN',
            minimumFractionDigits: 2,
        });

        return formattedValue;
    };

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
        onNameChange(event.target.value);
    };

    return (
        <>
            <form action="" className="formEvent">
                <label htmlFor="">Name of person adding event</label>
                <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Enter your full name"
                    value={name}
                    onChange={handleNameChange}
                />
                <br />
                <label htmlFor="">Entry Fee</label>
                <input
                    type="text"
                    placeholder="Entry fee"
                    value={inputValue}
                    onChange={handleInputChange}
                />
            </form>
        </>
    );
};

export default NameFee;
