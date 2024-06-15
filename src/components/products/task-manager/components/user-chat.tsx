import { formatDate } from './custom-chat';

function UserChat({ text, createdAt }: { text: string; createdAt: Date }) {
    return (
        <div className="w-full grid">
            <div className="justify-self-end bg-green-500  overflow-hidden break-words max-w-[75%]  rounded-lg p-2">
                <span className="break-words">{text}</span>
            </div>
            <span className="justify-self-end text-sm text-weak ">{formatDate(createdAt)}</span>
        </div>
    );
}

export default UserChat;
