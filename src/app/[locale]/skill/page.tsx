export interface tech {
    title: string;
    proficiency: 'Familiar' | 'Competent' | 'Expert' | 'AboveCompetent' | 'AboveFamiliar';
    reference: { link: string; alias: string }[];
    image: string;
}
import DevProcessApp from '@/components/one-time-use/skill-page-components/dev-process-app';
import ListTechnology from '@/components/list-technology';
import { useTranslations } from 'next-intl';
function SkillPage() {
    const t = useTranslations('Skill');

    return (
        <div className="mb-8">
            <DevProcessApp
                content={{
                    title: t('title'),
                    stepOne: t('step.stepOne'),
                    stepTwo: t('step.stepTwo'),
                    stepThree: t('step.stepThree'),
                    stepFour: t('step.stepFour'),
                }}
            />
            <ListTechnology />
        </div>
    );
}

export default SkillPage;
