function UserChat({ text }: { text: string }) {
    return (
        <div className="w-full grid">
            <div className="justify-self-end bg-green-500 max-w-9/12 rounded-lg p-2">{text}</div>
        </div>
    );
}

export default UserChat;
