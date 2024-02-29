'use client';

import { useEffect, useState } from 'react';
import classNames from 'classnames';
function Input({
    type,
    placeholder,
    className,
}: {
    type: 'password' | 'text' | 'email';
    placeholder?: string;
    className?: string;
}) {
    const [isInputTrigger, setIsInputTrigger] = useState<boolean>(false);
    const [inputValue, setInputValue] = useState<string>('');
    useEffect(() => {
        return () => {
            setIsInputTrigger(false);
        };
    }, []);
    return (
        <input
            onFocus={(ev) => {
                setIsInputTrigger(true);
            }}
            onBlur={(ev) => {
                setIsInputTrigger(false);
            }}
            onChange={(ev) => {
                setInputValue(ev.target.value);
            }}
            value={inputValue}
            type={type}
            placeholder={placeholder}
            className={classNames(
                'w-full block bg-[var(--cooler-color)] outline-none mb-5 h-[40px] px-[4px]  border-b-[3px]    ',
                className,
                { 'border-weak': !isInputTrigger, 'border-green-500': isInputTrigger },
            )}
        />
    );
}

export default Input;
