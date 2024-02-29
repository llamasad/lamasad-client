'use client';
import { ReactNode } from 'react';
import classNames from 'classnames';
import images from '@/assets/images';
import Image from 'next/image';
function FormWrapper({ children, className }: { children: ReactNode; className?: string }) {
    console.log(images.loginRegisterBG);
    return (
        //
        <div className={classNames('', className)}>
            <Image className="w-full backdrop-opacity-95 backdrop-invert" src={images.loginRegisterBG} alt="" />
            {children}
        </div>
    );
}

export default FormWrapper;
