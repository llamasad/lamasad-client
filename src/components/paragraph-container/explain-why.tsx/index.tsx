import AngleBracketsXWrapper from '@/components/wrapper-components/angle-bracket';

function ExplainWhy({ content }: { content: { title: string; answer: string } }) {
    return (
        <div className="mt-[120px] pt-[40px] border-y-[1px] pb-[80px] border-solid border-weak ">
            <AngleBracketsXWrapper width="20">
                <p>{content.title}</p>
            </AngleBracketsXWrapper>
            <p className="text-[40px] text-tl mt-[40px]">{content.answer}</p>
        </div>
    );
}

export default ExplainWhy;
