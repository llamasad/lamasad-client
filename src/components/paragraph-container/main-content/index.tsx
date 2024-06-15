import { LogoIcon } from '@/components/icons';
import AngleBracketsXWrapper from '@/components/wrapper-components/angle-bracket';
function MainContent({ content }: { content: { description: string; extraDescription: string; release: string } }) {
    return (
        <div className="flex flex-wrap">
            <div className="mb:hidden tl:block w-1/3 text-center">
                <LogoIcon className="w-auto mx-auto  mb-[40px]" />
            </div>
            <div className="mb:w-full tl:w-2/3">
                <p className="lt:text-6xl  lt:font-bold tl:text-4xl mb:text-2xl mb:font-semibold tl:text-right mb:text-center text-tl">
                    {content.description}
                </p>
            </div>

            <AngleBracketsXWrapper width="60" className="mt-[40px] mb:hidden tl:flex mx-auto w-[80%] text-center">
                <p className="lt:text-lg">
                    {content.extraDescription}
                    <br></br>
                    {content.release}
                </p>
            </AngleBracketsXWrapper>
        </div>
    );
}
export default MainContent;
