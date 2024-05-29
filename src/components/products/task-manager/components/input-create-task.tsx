'use client';

import classNames from 'classnames';
import { ForwardedRef, forwardRef, useState } from 'react';

const InputCreateTask = forwardRef(function Input(
    {
        type,
        placeholder,
        name,
        className,
        validateTimes,
    }: {
        type: string;
        placeholder?: string;
        name: string;
        className?: string;
        validateTimes?: Function;
    },
    ref: ForwardedRef<HTMLInputElement>,
) {
    const [value, setValue] = useState<string>('');
    const [validateMess, setValidateMess] = useState('');
    return (
        <div className="relative w-full">
            <input
                ref={ref}
                onChange={(ev) => {
                    if (type === 'date') {
                        validateTimes && validateTimes(setValidateMess) && setValue(ev.currentTarget.value);
                    } else {
                        setValue(ev.currentTarget.value);
                    }
                }}
                value={value}
                onFocus={(ev: any) => {
                    const element = ev.currentTarget as HTMLInputElement;
                    element.classList.add('border-green-500');
                    element.classList.remove('border-weak');
                }}
                onBlur={(ev: any) => {
                    const element = ev.currentTarget as HTMLInputElement;
                    element.classList.remove('border-green-500');
                    element.classList.add('border-weak');
                }}
                className={classNames(
                    className,
                    'border border-solid w-full border-weak rounded outline-none pl-[10px] bg-cooler   h-[38px]',
                )}
                name={name}
                type={type}
                placeholder={placeholder}
            />
            <span className="absolute bottom-[-18px] text-[#E9D502] left-0 text-sm">{validateMess}</span>
        </div>
    );
});

export default InputCreateTask;
