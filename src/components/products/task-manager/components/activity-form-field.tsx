import { useState } from 'react';
import { Input } from 'antd';

// Now you can use Input and TextArea components in your code
// const { Input } = antd;
const { TextArea } = Input;
function ActivityFormField({
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
}) {
    const [value, setValue] = useState<string>(fieldValue);
    return (
        <div>
            <h2 className="text-lg mb-[10px] text-tl">{tilte}</h2>
            {type === 'text' ? (
                <Input
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
                    value={fieldValue}
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
}

export default ActivityFormField;
