export const skill: {
    Familiar: {
        color: string;
        fill: boolean[];
    };
    AboveFamiliar: { color: string; fill: boolean[] };

    Competent: {
        color: string;
        fill: boolean[];
    };
    AboveCompetent: {
        color: string;
        fill: boolean[];
    };
    Expert: {
        color: string;
        fill: boolean[];
    };
} = {
    Familiar: { color: '#d11111', fill: [true, false, false, false, false] },
    AboveFamiliar: { color: '#cfb821', fill: [true, true, false, false, false] },
    Competent: { color: '#7517d4', fill: [true, true, true, false, false] },
    AboveCompetent: { color: '#216ccf', fill: [true, true, true, true, false] },
    Expert: { color: '#27cf21', fill: [true, true, true, true, true] },
};
import classNames from 'classnames';
function SkillBar({
    proficiency,
}: {
    proficiency: 'Familiar' | 'Competent' | 'Expert' | 'AboveCompetent' | 'AboveFamiliar';
}) {
    const skillBar = skill[proficiency];
    return (
        <div className="flex space-x-1.5 h-[12px]">
            {skillBar.fill.map((v, i) =>
                v === true ? (
                    <div
                        key={i}
                        className={classNames(`w-[12px] rounded-full`, 'bg-[' + skill[proficiency].color + ']')}
                    ></div>
                ) : (
                    <div key={i} className="bg-[#919191] rounded-full w-[12px]"></div>
                ),
            )}
        </div>
    );
}

export default SkillBar;
