'use client';
import Image from 'next/image';
import images from '@/assets/images';
import { DownloadIcon, ExitIcon, EyeIcon } from '@/components/icons';
function ActivityFormFileInput({
    typeOfInput,
    title,
    fileSize,
    onEditMode,
    handleRemoveFile,
    src,
}: {
    typeOfInput: 'docx' | 'pdf';
    title: string;
    fileSize: string;
    onEditMode: boolean;
    handleRemoveFile: () => void;
    src?: string;
}) {
    const typeFormat = (typeOfInput + 'Icon') as 'docxIcon' | 'pngIcon' | 'pdfIcon';
    return (
        <div className=" w-[160px] border border-weak rounded-lg p-[10px]">
            <div className="flex">
                <Image src={images[typeFormat]} alt="" width={60} height={60} />
                <div className="grow flex flex-col justify-between">
                    <div className="flex justify-around ">
                        <span
                            onClick={() => {
                                if (src) {
                                    window.open(src, '_blank');
                                }
                            }}
                            className="p-1.5 rounded-full cursor-pointer hover:bg-weak"
                        >
                            <DownloadIcon className="w-[18px] h-[18px]" />
                        </span>
                        {onEditMode ? (
                            <span onClick={handleRemoveFile} className="p-1 rounded-full cursor-pointer hover:bg-weak">
                                <ExitIcon className="w-[20px] h-[20px]" />
                            </span>
                        ) : (
                            <span
                                onClick={() => {
                                    if (src) {
                                        window.open(src, '_blank');
                                    }
                                }}
                                className="p-1 rounded-full cursor-pointer hover:bg-weak"
                            >
                                <EyeIcon className="w-[20px] h-[20px]" />
                            </span>
                        )}
                    </div>
                    <div className="ml-[6px]"> {fileSize}</div>
                </div>
            </div>
            <span className="px-[4px] w-full block mt-[6px] truncate">{title}</span>
        </div>
    );
}

export default ActivityFormFileInput;
