import images from '@/assets/images';
import { ExportIcon, OpenIcon } from '@/components/icons';
import StaticLink from '@/components/navigation/staic-link';
import AngleBracketsXWrapper from '@/components/wrapper-components/angle-bracket';
import Image from 'next/image';
import { showcaseContentType } from '..';

function SummarySection({ content }: { content: showcaseContentType }) {
    return (
        <div className="relative border-y flex border-weak lt:h-[364px]">
            <div className="lt:w-1/2  mb:w-full mt-10">
                <AngleBracketsXWrapper className="mb:mb-64 lt:mb-0 text-tl" width="20">
                    <p className="text-lg text-tl text-xl font-semibold">{content.title} </p>
                </AngleBracketsXWrapper>
                <p className="mt-12 text-xl w-[96%]">{content.description}</p>{' '}
                <StaticLink
                    href="/showcase"
                    className="mt-12 mb:mb-8 lt:mb-0 p-2 inline-block border-weak border rounded text-xl"
                >
                    {content.button} <OpenIcon className="inline-block  w-5 h-5 translate-y-[-2px]" />
                </StaticLink>
            </div>
            <div className="lt:relative mb:absolute lt:left-12 lt:top-12 mb:left-[240px] mb:top-20 mb:scale-[0.65] lt:scale-100 w-1/2 h-[284px]">
                <div className="absolute w-96  h-56 flex lt:hover:z-10 origin-top-left  lt:hover:scale-[1.25]  transition-all  rotate-[-4deg] items-center justify-center bg-cooler border-weak border rounded object-contain top-0 right-48">
                    <Image width={0} height={0} className="rounded" src={images.tManagerPage} alt="" />
                </div>
                <div className="absolute w-96 h-56 flex lt:hover:z-10 origin-top-left  lt:hover:scale-[1.25] rotate-[-2deg] transition-all items-center justify-center bg-cooler border-weak border rounded top-6 right-32">
                    <Image width={0} height={0} className="rounded" src={images.imgTest} alt="" />
                </div>
                <div className="absolute w-96 h-56 flex lt:hover:z-10 origin-top-left  lt:hover:scale-[1.25] transition-all items-center justify-center bg-cooler border-weak border rounded top-12 right-16">
                    <Image width={0} height={0} className="rounded" src={images.hpnyGame} alt="" />
                </div>
            </div>
        </div>
    );
}

export default SummarySection;
