import ChatInput from './chat-input';
import CustomChat from './custom-chat';
import UserChat from './user-chat';

function ActivityChat() {
    return (
        <div className="grow flex flex-col ">
            <h2 className="mb-[10px] text-lg text-tl"> Activity chat</h2>

            <div className=" flex flex-col grow border border-tl rounded-lg mb-[40px]">
                <div className=" py-[10px]   flex  flex-col space-y-[10px] grow">
                    <UserChat text="" />
                    <CustomChat text="" customName="" urlCustomPic="" />
                </div>
                <div className="h-[40px] m-1">
                    <ChatInput />
                </div>
            </div>
        </div>
    );
}

export default ActivityChat;
