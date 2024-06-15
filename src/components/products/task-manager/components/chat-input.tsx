import { useState } from 'react';
import { SendMessageIcon } from '@/components/icons';
import classNames from 'classnames';
import { Socket } from 'socket.io-client';
import apiFecther from '@/service/task-manger-fetcher/api-fetcher';

function ChatInput({ socket, chat_id, TMUser }: { socket: Socket; chat_id: number; TMUser: any }) {
    const [value, setValue] = useState<string>('');
    const onSendMessage = () => {
        if (value.trim() && TMUser) {
            socket.emit('chatMessage', {
                room: chat_id,
                message: value,
                user_id: TMUser._id,
                username: TMUser.username,
                avatar: TMUser.imgSrc,
            });
            setValue('');
        }
    };
    return (
        <div className="h-[40px] items-center flex rounded-full w-full border border-weak px-1">
            <input
                onKeyDown={(ev) => {
                    if (ev.key === 'Enter') {
                        onSendMessage();
                    }
                }}
                value={value}
                onChange={(ev) => setValue((ev.currentTarget as HTMLInputElement).value)}
                type="text"
                className="grow mx-1 outline-none bg-transparent"
                placeholder="Aa"
            />
            <span onClick={onSendMessage}>
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
