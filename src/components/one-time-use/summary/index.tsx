import AngleBracketsXWrapper from '@/components/wrapper-components/angle-bracket';
import SummaryShowcaseSection from './summary-showcase-section';
import SummarySkillSection from './sumary-skill-section';
export type skillContentType = {
    title: string;
    description: string;
    button: string;
};
export type showcaseContentType = {
    title: string;
    description: string;
    button: string;
};
function Summary({ content }: { content: { skill: skillContentType; showcase: showcaseContentType } }) {
    return (
        <div>
            <SummaryShowcaseSection content={content.showcase} />
            <SummarySkillSection content={content.skill} />
        </div>
    );
}

export default Summary;
