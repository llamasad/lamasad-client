import { LogoIcon } from '@/components/icons';
import AngleBracketsXWrapper from '@/components/wrapper-components/angle-bracket';
function MainContent({ content }: { content: { description: string; extraDescription: string; release: string } }) {
    return (
        <div className="flex flex-wrap">
            <div className="w-1/3 text-center">
                <LogoIcon className="w-auto mx-auto  mb-[40px]" />
            </div>
            <div className="w-2/3">
                <p className="text-[64px] font-bold text-right text-tl">{content.description}</p>
            </div>

            <AngleBracketsXWrapper width="60" className="mt-[40px] mx-auto w-[80%] text-center">
                <p className="text-lg">
                    {content.extraDescription}
                    <br></br>
                    {content.release}
                </p>
            </AngleBracketsXWrapper>
        </div>
    );
}
export default MainContent;
