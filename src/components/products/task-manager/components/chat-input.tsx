import { useState } from 'react';
import { SendMessageIcon } from '@/components/icons';
import classNames from 'classnames';
function ChatInput() {
    const [value, setValue] = useState<string>('');

    return (
        <div className="h-[40px] items-center flex rounded-full w-full border border-weak px-1">
            <input
                value={value}
                onChange={(ev) => setValue((ev.currentTarget as HTMLInputElement).value)}
                type="text"
                className="grow mx-1 outline-none bg-transparent"
                placeholder="Aa"
            />
            <span>
                <SendMessageIcon
                    className={classNames('w-[32px] h-[32px] p-1 cursor-pointer rounded-full text-tl ', {
                        'bg-weak': !value,
                        'bg-green-500': value,
                    })}
                />
            </span>
        </div>
    );
}

export default ChatInput;
