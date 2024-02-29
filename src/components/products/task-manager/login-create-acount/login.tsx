'use client';

import { CheckIcon } from '@/components/icons';
import classNames from 'classnames';
import { Dispatch, FormEvent, LegacyRef, MutableRefObject, SetStateAction, useEffect, useRef, useState } from 'react';
import Input from '../components/input';
import ReCAPTCHA from 'react-google-recaptcha';
function Login() {
    const [captchaCodeRes, setCaptchaCodeRes] = useState<string | null>('');
    const reCaptchaRef = useRef<ReCAPTCHA | null>(null);
    const onSubmit = async (ev: FormEvent) => {
        ev.preventDefault();
        if (captchaCodeRes) {
            const secretKey = '6LeYOn8pAAAAAHInE4hXY-TL8GiHWVMnx-NTuk1_';
            const url = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${captchaCodeRes}`;

            try {
                const response = await fetch(url, { method: 'POST' });
                const data = await response.json();

                if (data.success) {
                    // Valid reCAPTCHA response
                    // Proceed with your application logic
                } else {
                    // Invalid reCAPTCHA response
                    // Handle accordingly
                }
            } catch (error) {
                console.error('Error verifying reCAPTCHA:', error);
            }
        }
    };

    return (
        <form className="border-r-[3px] border-weak pr-[24px]" action="" onSubmit={onSubmit}>
            <h2 className="  text-center text-lg text-tl font-medium mb-5">Sign In</h2>
            <div className="relative">
                <Input className="login-email-tm " type="email" placeholder="Email address" />
                <span className="block absolute bottom-[-20px] "> </span>
            </div>{' '}
            <div className="relative">
                <Input className="login-pwd-tm " type="password" placeholder="Password " />

                <span className="block absolute bottom-[-20px] "></span>
            </div>
            <div className="flex items-center">
                <input
                    type="checkbox"
                    className="appearance-none remember-checkbox--tm peer/remember "
                    name=""
                    id="desk"
                />
                <div
                    className="border-2  border-weak w-[18px] h-[18px] peer-checked/remember:bg-green-500 mr-[6px] cursor-pointer text-[rgb(var(--background-start-rgb))] peer-checked/remember:text-[rgb(var(--background-start-rgb))]"
                    onClick={() => {
                        (document.querySelector('.remember-checkbox--tm') as HTMLInputElement).click();
                    }}
                >
                    <CheckIcon className="w-[14px] ml-[1px]" />
                </div>
                <span>Remember account</span>
            </div>
            <span className="text-weak text-[14px] select-none">Not recommended on shared computers</span>
            <ReCAPTCHA
                className="mt-[8px]"
                ref={reCaptchaRef}
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string}
                onChange={setCaptchaCodeRes}
            />
            <div className="flex mt-4 justify-between items-center">
                <input
                    type="submit"
                    value={'Login'}
                    className="text-tl bg-weak hover:bg-green-500 transition-all w-[80px] h-[40px] rounded-full"
                />

                <button>Forgot your password?</button>
            </div>
        </form>
    );
}

export default Login;
