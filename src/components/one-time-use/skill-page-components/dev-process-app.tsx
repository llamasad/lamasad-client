import DevProcessSection from './dev-process-section';
import { ArrowIcon } from '@/components/icons';
function DevProcessApp({
    content,
}: {
    content: { title: string; stepOne: string; stepTwo: string; stepThree: string; stepFour: string };
}) {
    return (
        <div>
            <h1 className="text-tl text-center text-[28px] font-medium my-[30px] ">{content.title}</h1>
            <div className=" justify-center items-center tl:flex mb:hidden">
                <DevProcessSection
                    index={1}
                    title={content.stepOne}
                    detail="“idea tends to strike me in the most unforeseen moments, leading me to meticulously assess the rationality and viability of each idea before deciding on its execution.”"
                />
                <ArrowIcon className="rotate-[-90deg] lt:w-20 lt:h-24  tl:w-10 tl:h-12 mb:w-8 mb:h-10 mb:w-8" />

                <DevProcessSection index={2} title={content.stepTwo} detail="" />
                <ArrowIcon className="rotate-[-90deg] lt:w-20 lt:h-24  tl:w-10 tl:h-12 mb:w-8 mb:h-10 mb:w-8" />
                <DevProcessSection index={3} title={content.stepThree} detail="" />
                <ArrowIcon className="rotate-[-90deg] lt:w-20 lt:h-24  tl:w-10 tl:h-12 mb:w-8 mb:h-10 mb:w-8" />

                <DevProcessSection index={4} title={content.stepFour} detail="" />
            </div>
        </div>
    );
}

export default DevProcessApp;
