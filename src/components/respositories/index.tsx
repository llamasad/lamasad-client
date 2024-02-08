'use client';

import { data } from 'jquery';
import Project from '../project';
import images from '@/assets/images';

function Respositories() {
    return (
        <div className="mt-[50px] space-y-3 ">
            <div className="flex flex-wrap space-x-3">
                <Project description="a template website manga" title="Mangabaka" img={images.lightLogo}></Project>
                <Project description="" title="" img={images.imgTest}></Project>
                <Project description="" title="" img={images.lamasadImg}></Project>
            </div>
            <div className="flex flex-wrap space-x-3">
                <Project description="" title="" img={images.darkLogo}></Project>
            </div>
        </div>
    );
}

export default Respositories;
