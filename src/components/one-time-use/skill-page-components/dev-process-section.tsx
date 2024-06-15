interface Props {
    index: number;
    title: string;
    detail: string;
}
import { PrayIcon } from '@/components/icons';
function DevProcessSection({ index, title, detail }: Props) {
    return (
        <div className="rounded-full lt:w-40  tl:w-[125px]  tl:h-[125px]  cursor-pointer lt:h-40 bg-weak ">
            <h3 className="flex flex-col lt:text-[20px] tl:text-[19px] font-medium justify-center text-tl items-center h-full text-center">
                <span className="font-semibold"> {index}</span>
                <span className="flex ">
                    {title} {index === 4 && <PrayIcon className="w-[16px]" />}
                </span>
            </h3>
        </div>
    );
}

export default DevProcessSection;
