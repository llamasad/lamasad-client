import { SendMessageIcon } from '@/components/icons';
import CustomChat from './custom-chat';
import UserChat from './user-chat';
import { useState } from 'react';
import classNames from 'classnames';
import ChatInput from './chat-input';

function GeneralChat({ chat_id }: { chat_id: number }) {
    const [value, setValue] = useState<string>('');
    return (
        <div className="grow py-[10px] border-y overflow-y-auto border-current flex flex-col ">
            <div className="h-[calc(100%-40px)] space-y-[10px]">
                <UserChat text="" />
                <CustomChat urlCustomPic="" customName="Dat Do" text="" />
            </div>
            <ChatInput />
        </div>
    );
}

export default GeneralChat;
