interface Props {
    index: number;
    title: string;
    detail: string;
}
import { PrayIcon } from '@/components/icons';
function DevProcessSection({ index, title, detail }: Props) {
    return (
        <div className="rounded-full w-[160px] cursor-pointer h-[160px] bg-weak ">
            <h3 className="flex flex-col text-[20px] font-medium justify-center text-tl items-center h-full text-center">
                <span className="font-semibold"> {index}</span>
                <span className="flex">
                    {title} {index === 4 && <PrayIcon className="w-[16px]" />}
                </span>
            </h3>
        </div>
    );
}

export default DevProcessSection;
