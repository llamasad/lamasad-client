import Image from 'next/image';

function CustomChat({ text, urlCustomPic, customName }: { text: string; urlCustomPic: string; customName: string }) {
    return (
        <div>
            <span className=" text-sm text-weak ">{customName}</span>
            <div className="w-full flex items-center">
                <Image src={urlCustomPic} alt="" />
                <div className=" bg-weak max-w-[70%] rounded-lg p-[10px]">{text}</div>
            </div>
        </div>
    );
}

export default CustomChat;
