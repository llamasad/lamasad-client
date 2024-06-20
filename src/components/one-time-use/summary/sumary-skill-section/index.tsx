import images from '@/assets/images';
import { ExportIcon, OpenIcon } from '@/components/icons';
import StaticLink from '@/components/navigation/staic-link';
import AngleBracketsXWrapper from '@/components/wrapper-components/angle-bracket';
import Image from 'next/image';
import { skillContentType } from '..';
function SummarySkillSection({ content }: { content: skillContentType }) {
    return (
        <div className="relative flex border-weak lt:h-[364px]">
            <div className="lt:w-1/2 mb:w-full mt-10">
                <AngleBracketsXWrapper className="mb:mb-[292px] lt:mb-0" width="20">
                    <p className="text-lg text-xl font-semibold">{content.title} </p>
                </AngleBracketsXWrapper>
                <p className="mt-12 text-xl w-[96%]">{content.description}</p>{' '}
                <StaticLink href="/skill" className="mt-12 mb-8 p-2 inline-block border-weak border rounded text-xl">
                    {content.button}
                    <OpenIcon className="inline-block ml-1  w-5 h-5 translate-y-[-2px]" />
                </StaticLink>
            </div>
            <div className="lt:relative mb:absolute lt:left-12 lt:top-12 mb:left-0 mb:top-32 lt:w-1/2 mb:w-full h-[284px] flex flex-wrap">
                <div className=" w-1/2 max-h-[100px] flex   items-center justify-center   object-contain ">
                    <Image width={0} height={144} className="rounded" src={images.postgresIcon} alt="" />
                </div>
                <div className="  w-1/2 max-h-[100px]  flex     items-center justify-center   ">
                    <Image width={0} height={144} className="rounded" src={images.gsapIcon} alt="" />
                </div>
                <div className="  w-1/2 max-h-[100px]  flex    items-center justify-center     ">
                    <Image width={0} height={144} className="rounded" src={images.nextjsIcon} alt="" />
                </div>
                <div className="  w-1/2 max-h-[100px]  flex    items-center justify-center     ">
                    <Image width={0} height={144} className="rounded" src={images.linuxIcon} alt="" />
                </div>
            </div>
        </div>
    );
}

export default SummarySkillSection;
