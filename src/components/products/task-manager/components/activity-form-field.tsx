import { ForwardedRef, useImperativeHandle, useState } from 'react';
import { Input } from 'antd';
import { forwardRef } from 'react';
import { get } from 'jquery';
// Now you can use Input and TextArea components in your code
// const { Input } = antd;
const { TextArea } = Input;

const ActivityFormField = forwardRef(function A(
    {
        tilte,
        onEditMode,
        fieldValue,
        type,
        name,
    }: {
        tilte: string;
        onEditMode: boolean;
        fieldValue: string;
        type: 'text' | 'textarea';
        name: string;
    },
    ref?: ForwardedRef<any>,
) {
    const [value, setValue] = useState<string>(fieldValue);
 
    return (
        <div>
            <h2 className="text-lg mb-[10px] text-tl">{tilte}</h2>
            {type === 'text' ? (
                <Input
                    ref={ref}
                    name={name}
                    className="w-full text-base bg-transparent hover:bg-transparent focus-within:bg-transparent   !text-current !border-weak"
                    value={value}
                    onChange={(ev) => {
                        setValue(ev.currentTarget.value);
                    }}
                    disabled={!onEditMode}
                    type="text"
                />
            ) : (
                <TextArea
                    ref={ref}
                    value={value}
                    onChange={(ev) => {
                        setValue(ev.currentTarget.value);
                    }}
                    disabled={!onEditMode}
                    className="bg-transparent text-base hover:bg-transparent focus-within:bg-transparent !text-current !border-weak"
                    placeholder="Autosize height based on content lines"
                    autoSize={{ maxRows: 3 }}
                />
            )}
        </div>
    );
});

export default ActivityFormField;
