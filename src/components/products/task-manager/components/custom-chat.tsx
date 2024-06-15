import Image from 'next/image';
export function formatDate(date: Date) {
    const inputDate = new Date(date);
    const today = new Date();

    // Extract hours and minutes
    const hours = inputDate.getHours().toString().padStart(2, '0');
    const minutes = inputDate.getMinutes().toString().padStart(2, '0');

    // Check if the date is today
    const isToday =
        inputDate.getDate() === today.getDate() &&
        inputDate.getMonth() === today.getMonth() &&
        inputDate.getFullYear() === today.getFullYear();

    if (isToday) {
        return `${hours}:${minutes}`;
    } else {
        // Extract day, month, and year
        const day = inputDate.getDate().toString().padStart(2, '0');
        const month = (inputDate.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
        const year = inputDate.getFullYear();

        return `${hours}:${minutes} - ${day}/${month}/${year}`;
    }
}

function CustomChat({
    text,
    urlCustomPic,
    customName,
    createdAt,
}: {
    text: string;
    urlCustomPic: string;
    customName: string;
    createdAt: Date;
}) {
    return (
        <div>
            <span className=" text-sm text-weak ">{customName}</span>
            <div className="w-full flex items-center">
                <Image src={urlCustomPic} alt="" className="rounded-full mr-1.5" width={40} height={40} />
                <div className=" bg-weak max-w-[70%] rounded-lg p-[10px]">{text}</div>
            </div>
            <span className=" text-sm text-weak ">{formatDate(createdAt)}</span>
        </div>
    );
}

export default CustomChat;
