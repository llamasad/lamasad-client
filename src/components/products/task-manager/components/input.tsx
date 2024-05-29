'use client';

import { ForwardedRef, forwardRef, useEffect, useState } from 'react';
import classNames from 'classnames';
import { useImperativeHandle } from 'react';
const validateType = {
    required: (value: string) => {
        if (value.length === 0) {
            return 'This field cannot be left blank';
        }
        return false;
    },
    isNotEmail: (email: string) => {
        if (
            !String(email)
                .toLowerCase()
                .match(
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                )
        ) {
            return 'Please type in the correct email format';
        }
        return false;
    },
    notWithinRange: (value: string, min: number, max: number) => {
        if (value.length >= max || value.length <= min) {
            return `Character length ranges from ${min}-${max}`;
        }
    },
};

const validationData = (type: 'password' | 'email', value: string) => {
    switch (type) {
        case 'password': {
            return [validateType.required(value), validateType.notWithinRange(value, 6, 20)].find(
                (el) => typeof el === 'string',
            ) as string;
        }
        case 'email': {
            return [validateType.required(value), validateType.isNotEmail(value)].find(
                (el) => typeof el === 'string',
            ) as string;
        }
    }
};
const Input = forwardRef(function Input(
    {
        type,
        placeholder,
        className,
        name,
        isLocked = true,
    }: {
        type: 'password' | 'email';
        placeholder?: string;
        name: 'password' | 'email';
        className?: string;
        isLocked?: boolean;
    },
    ref: ForwardedRef<{ getValidateMess: () => string | undefined; getInputValue: () => string }>,
) {
    const [isInputTrigger, setIsInputTrigger] = useState<boolean>(false);
    const [inputValue, setInputValue] = useState<string>('');
    const [validateMess, setValidateMess] = useState<string | undefined>('');
    useImperativeHandle(
        ref,
        () => ({
            getValidateMess: () => validationData(type, inputValue),
            getInputValue: () => inputValue,
        }),
        [inputValue],
    );
    useEffect(() => {
        return () => {
            setIsInputTrigger(false);
        };
    }, []);
    return (
        <>
            <input
                onFocus={(ev) => {
                    setIsInputTrigger(true);
                    setValidateMess('');
                }}
                onBlur={(ev) => {
                    setIsInputTrigger(false);
                    setValidateMess(validationData(type, inputValue));
                }}
                onChange={(ev) => {
                    if (isLocked) {
                        setInputValue(ev.target.value);
                    }
                }}
                value={inputValue}
                type={type}
                name={name}
                placeholder={placeholder}
                autoComplete="off"
                className={classNames(
                    'w-full block bg-[var(--cooler-color)] outline-none mb-5  h-[40px] px-[4px]  border-b-[3px]    ',
                    className,
                    {
                        'border-weak': !isInputTrigger && !validateMess,
                        'border-green-500': isInputTrigger,
                        'border-red-500': !isInputTrigger && validateMess,
                    },
                )}
            />
            {validateMess && (
                <span className="block absolute  bottom-[-20px] text-sm text-red-500">{validateMess}</span>
            )}
        </>
    );
});

export default Input;
