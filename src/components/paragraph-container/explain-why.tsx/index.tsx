import AngleBracketsXWrapper from '@/components/wrapper-components/angle-bracket';

function ExplainWhy() {
    return (
        <div className="mt-[120px] pt-[40px] border-y-[1px] pb-[80px] border-solid border-weak ">
            <AngleBracketsXWrapper width="20">
                <p>{`What is the origin or meaning of the name "Llamasad" ?`}</p>
            </AngleBracketsXWrapper>
            <p className="text-[40px] text-tl mt-[40px]">
                {
                    'The Llamas, a distinct breed of camel, serves as a symbol of tenacity and intellectual curiosity. This creature embodies my approach to work, reflecting my perseverance and propensity for thoughtful deliberation.In fact, I chanced upon a video that showcased a camel unexpectedly spitting in the face of an unsuspecting tourist. This peculiar incident piqued my interest, and I decided to adopt it as my unique alias.'
                }
            </p>
        </div>
    );
}

export default ExplainWhy;
