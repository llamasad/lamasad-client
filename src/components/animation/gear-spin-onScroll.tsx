import { useEffect } from 'react';
import { GearIcon } from '../icons';
import classNames from 'classnames';
import gsap from 'gsap';
function GearSpinOnScroll({ className, trigger }: { className?: string; trigger: string }) {
    useEffect(() => {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: trigger,
                pinnedContainer: trigger,
                start: 'top 65px',
            },
        });
        tl.fromTo(
            '.gear-big',
            { x: () => '+=20px', y: () => '+=20px', opacity: 0 },
            { x: () => 28, y: () => 0, opacity: 1 },
        );
        tl.fromTo(
            '.gear-small',
            { x: () => '-=20px', y: () => '-=20px', opacity: 0 },
            { x: () => 0, y: () => -17, opacity: 1 },
            '<',
        );
        return () => {
            tl.kill();
        };
    }, [trigger]);
    return (
        <div className={classNames('gear-container absolute', className)}>
            <GearIcon className="gear-big h-[60px] translate-x-[28px]" />
            <GearIcon className="gear-small h-[50px] translate-y-[-17px]" />
        </div>
    );
}

export default GearSpinOnScroll;
