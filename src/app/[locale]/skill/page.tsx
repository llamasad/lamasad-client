'use client';

export interface tech {
    title: string;
    proficiency: 'Familiar' | 'Competent' | 'Expert' | 'AboveCompetent' | 'AboveFamiliar';
    reference: { link: string; alias: string }[];
    image: string;
}
import DevProcessApp from '@/components/one-time-use/skill-page-components/dev-process-app';
import ListTechnology from '@/components/list-technology';
function SkillPage() {
    return (
        <div>
            {' '}
            <DevProcessApp />
            <ListTechnology />
        </div>
    );
}

export default SkillPage;
