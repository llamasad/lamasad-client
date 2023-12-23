'use client';
import Preview from '@/components/one-time-use/preview';
import DashedWrap from '@/components/wrapper-components/dashed-wrap';
import MainContent from '@/components/paragraph-container/main-content';
import ExplainWhy from '@/components/paragraph-container/explain-why.tsx';
export default function Home() {
    return (
        <div className="mb:w-mb-body tl:w-tl-body lt:w-lt-body dt:w-dt-body mx-auto">
            <DashedWrap>
                <MainContent />
            </DashedWrap>
            <ExplainWhy />
            <Preview />

            <div className="h-[500vw]"></div>
        </div>
    );
}
