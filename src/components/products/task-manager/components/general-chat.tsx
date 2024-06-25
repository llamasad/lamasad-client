import CustomChat from './custom-chat';
import UserChat from './user-chat';
import { useEffect, useState, useRef } from 'react';
import ChatInput from './chat-input';
import { io, Socket } from 'socket.io-client'; // Import the Socket type from 'socket.io-client'
import useUsersTaskFetcher from '@/hooks/use-users-task-fetcher';
import { useSelector } from '@/lib/redux';
import { selectTMUser } from '@/lib/redux/slices/tm-user-slice';

function GeneralChat({ chat_id, task_id }: { chat_id: number; task_id: string }) {
    const [value, setValue] = useState<string>('');
    const socketRef = useRef<Socket | null>(null); // Initialize useRef
    const { usersTask, isLoading, isError } = useUsersTaskFetcher(task_id);
    const TMUser = useSelector(selectTMUser);
    const [messages, setMessages] = useState<any[]>([]);
    const scrollElRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Scroll to the bottom whenever messages change
        if (scrollElRef.current) {
            scrollElRef.current.scrollTo({
                top: scrollElRef.current.scrollHeight,
                behavior: 'smooth',
            });
        }
    }, [messages]);
    // useEffect(() => {
    //     socketRef.current = io(process.env.NEXT_PUBLIC_SERVER_SIDE_URL as string, {
    //         auth: {
    //             serverOffset: 0,
    //         },
    //     });

    //     const socket: Socket = socketRef.current; // Assign the Socket type to the 'socket' variable

    //     // ...

    //     // Listen for incoming chat messages
    //     socket.on('chatMessage', (data, serverOffset) => {
    //         setMessages((prev) => [...prev, data]);
    //     });
    //     // Listen for latest messages when joining the room
    //     socket.on('latestMessages', (data) => {
    //         data;
    //         setMessages((prev) => [
    //             ...prev,
    //             ...data.map((item: any) => ({
    //                 username: item.username,
    //                 message: item.messageText,
    //                 user_id: item.user_id,
    //                 avatar: item.imgSrc,
    //                 created_at: item.createdAt,
    //             })),
    //         ]);
    //     });
    //     socket.emit('joinBoxChat', chat_id);

    //     // Clean up on component unmount
    //     return () => {
    //         socket.off('chatMessage'); // Remove the specific event listener
    //         socket.off('latestMessages'); // Remove the specific event listener
    //         socket.disconnect();
    //         socketRef.current = null;
    //     };
    // }, [chat_id]);

    return (
        <div className="h-[300px] py-[10px] border-y border-current flex flex-col ">
            {!isLoading && (
                <>
                    <div ref={scrollElRef} className="h-[calc(100%-40px)] overflow-y-auto space-y-[10px]">
                        {messages.map((message, index) => {
                            if (TMUser && message.user_id === TMUser._id) {
                                return <UserChat createdAt={message.created_at} key={index} text={message.message} />;
                            } else {
                                return (
                                    <CustomChat
                                        key={index}
                                        urlCustomPic={message.avatar}
                                        customName={message.username}
                                        text={message.message}
                                        createdAt={message.created_at}
                                    />
                                );
                            }
                        })}
                    </div>
                    {socketRef.current && <ChatInput chat_id={chat_id} TMUser={TMUser} socket={socketRef.current} />}{' '}
                </>
            )}
        </div>
    );
}

export default GeneralChat;
