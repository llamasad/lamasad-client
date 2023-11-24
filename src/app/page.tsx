'use client';

import Image from 'next/image';
import gsap from 'gsap';
export default function Home() {
    console.log(gsap);
    const onEnter = ({ currentTarget }: React.MouseEvent<HTMLElement>) => {
        gsap.to(currentTarget, { backgroundColor: '#e77614', scale: 1.2 });
    };

    const onLeave = ({ currentTarget }: React.MouseEvent<HTMLElement>) => {
        gsap.to(currentTarget, { backgroundColor: '#28a92b', scale: 1 });
    };

    return (
        // <div className="app flex-row">
        //     <div className="box" onMouseEnter={onEnter} onMouseLeave={onLeave}>
        //         Hover Me
        //     </div>
        // </div>
<></>
        );
}
