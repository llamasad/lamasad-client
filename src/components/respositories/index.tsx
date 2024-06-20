'use client';

import { data } from 'jquery';
import Project from '../project';
import images from '@/assets/images';
import { AppStaticsPathnames } from '@/config/language';

function Respositories() {
    return (
        <div className="mt-[50px]   flex flex-wrap">
            <Project
                src={'/showcase/product/task-manager' as AppStaticsPathnames}
                description="a task manager website"
                title="TManager"
                img={images.lightLogo}
            ></Project>
            <Project
                isExternalRef
                src={'https://github.com/llamasad/webmanga'}
                description="webside manga reader"
                title="Manga3k"
                img={images.imgTest}
            ></Project>
            <Project
                src={'https://github.com/llamasad/halloween'}
                isExternalRef
                description="a web use faceAPI tensorflow"
                title="Halloween project"
                img={images.hallweenIcon}
            ></Project>
            <Project
                src={'/showcase/product/happy-new-year-game' as AppStaticsPathnames}
                description="a C++ game"
                title="Happy New Year Game"
                img={images.catIcon}
            ></Project>
        </div>
    );
}

export default Respositories;
