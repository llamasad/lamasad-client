'use client'
import Image from 'next/image';
import  images  from '@/assets/images';
function Header() {
  
    return (
        <header className=" lg h-[66px] border-b-[1px] border-[#bdbdbd] bg-[rgba(0,0,0,0.8)] backdrop-blur-lg fixed top-0 left-0 w-full z-10 ">
            <div className="  m-auto dt:w-dt-body lt:w-lt-body tl:w-tl-body mb:w-mb-body  select-none flex h-full ">
                <Image src={images.darkLogo} width={46} height={46} className='cursor-pointer' alt='logo' />
                <h1 className="ml-[6px] cursor-pointer font-iconFont text-3xl flex h-full items-center justify-content-center">
                    lamasad
                </h1>
            </div>
        </header>
    );
}

export default Header;
