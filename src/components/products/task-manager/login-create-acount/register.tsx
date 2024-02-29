import { ArrowIcon, ReloadIcon } from '@/components/icons';
import Input from '../components/input';
import { Dispatch, SetStateAction } from 'react';
function Register({ setX }: { setX: Dispatch<SetStateAction<number>> }) {
    return (
        <form className="ml-[26px] relative border-r-[3px] border-weak pr-[24px] min-w-[325px]" action="">
            <span
                className="flex absolute items-center top-[4px] cursor-pointer"
                onClick={() => {
                    setX(0);
                }}
            >
                <ArrowIcon className="w-[14px] h-[14px] rotate-90 mr-1" /> <span>Sign In</span>
            </span>
            <span className=""></span>
            <h2 className="  text-center text-lg text-tl font-medium mb-5">Sign Up</h2>
            <div className="relative">
                <Input className="login-email-tm " type="email" placeholder="Email address" />
                <span className="block absolute bottom-[-20px] "> </span>
            </div>{' '}
            <div className="relative">
                <Input className="login-pwd-tm " type="password" placeholder="Password " />

                <span className="block absolute bottom-[-20px] "></span>
            </div>
            <button className="text-tl bg-weak hover:bg-green-500 transition-all w-[150px] h-[40px] mb-[20px] rounded-full">
                Send Code
            </button>
            <div className="flex items-center mb-5 relative">
                <span>Verification</span>
                <input
                    type="text"
                    className="ml-2 pl-2 w-full block  bg-[var(--cooler-color)] outline-none  h-[40px] px-[4px]  "
                    placeholder="Confirmation code"
                />
                <ReloadIcon className="absolute right-[6px] w-[18px] cursor-pointer rotate-[135deg] h-[18px] text-currentColor " />
            </div>
            <div className="flex mt-4 justify-between items-center">
                <button className="text-tl bg-weak hover:bg-green-500 transition-all w-[150px] h-[40px] rounded-full">
                    Register
                </button>
            </div>
        </form>
    );
}

export default Register;
