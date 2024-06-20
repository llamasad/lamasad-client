import Preview from '@/components/one-time-use/preview';
import DashedWrap from '@/components/wrapper-components/dashed-wrap';
import MainContent from '@/components/paragraph-container/main-content';
import ExplainWhy from '@/components/paragraph-container/explain-why.tsx';
import { useTranslations } from 'next-intl';
import Summary from '@/components/one-time-use/summary';
import { zoomies } from 'ldrs';
type Props = {
    params: { locale: string };
};

export default function Home() {
    const t = useTranslations('Home');
    return (
        <div className="">
            <DashedWrap>
                <MainContent
                    content={{
                        description: t('MainContent.description'),
                        extraDescription: t('MainContent.extraDescription'),
                        release: t('MainContent.release'),
                    }}
                />
            </DashedWrap>
            <ExplainWhy content={{ title: t('ExplainWhy.title'), answer: t('ExplainWhy.answer') }} />
            <Preview
                content={{
                    title: t('BrieIntroduction.title'),
                    description: {
                        sectionUp: t('BrieIntroduction.description.sectionUp'),
                        sectionDown: t('BrieIntroduction.description.sectionDown'),
                    },
                    thinking: {
                        title: t('BrieIntroduction.thinking.title'),
                        firstContent: t('BrieIntroduction.thinking.firstContent'),
                        secondContent: t('BrieIntroduction.thinking.secondContent'),
                        thirdContent: t('BrieIntroduction.thinking.thirdContent'),
                        fourthContent: t('BrieIntroduction.thinking.fourthContent'),
                    },
                    skill: {
                        title: t('BrieIntroduction.skill.title'),
                        firstContent: t('BrieIntroduction.skill.firstContent'),
                    },
                    showcase: {
                        title: t('BrieIntroduction.showcase.title'),
                        firstContent: t('BrieIntroduction.showcase.firstContent'),
                    },
                }}
            />
            <Summary
                content={{
                    skill: {
                        title: t('summary.skill.title'),
                        description: t('summary.skill.description'),
                        button: t('summary.skill.button'),
                    },
                    showcase: {
                        title: t('summary.showcase.title'),
                        description: t('summary.showcase.description'),
                        button: t('summary.showcase.button'),
                    },
                }}
            />
        </div>
    );
}
