import { LogoIcon } from '@/components/icons';
import AngleBracketsXWrapper from '@/components/wrapper-components/angle-bracket';
function MainContent() {
    return (
        <div className="flex flex-wrap">
            <div className="w-1/3 text-center">
                <LogoIcon className="w-auto mx-auto  mb-[40px]" />
            </div>
            <div className="w-2/3">
                <p className="text-[64px] font-bold text-right text-tl">
                    {'Llamasad is a website digital platform showcase of  '}

                    {'my profile, delivering '}

                    {'engaging content.'}
                </p>
            </div>

            <AngleBracketsXWrapper width="60" className="mt-[40px] mx-auto w-[80%] text-center">
                <p className="text-lg">
                    {
                        'This platform serves as a comprehensive repository for my professional curriculum vitae, as well as a personal space for tracking and reflecting on my ongoing professional development. '
                    }
                    <br></br>
                    {'“release from 12/12/2023”'}
                </p>
            </AngleBracketsXWrapper>
        </div>
    );
}
export default MainContent;
