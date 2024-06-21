'use client';

import { CheckIcon, LoadIcon, ReloadIcon } from '@/components/icons';
import classNames from 'classnames';
import { Dispatch, FormEvent, LegacyRef, MutableRefObject, SetStateAction, useEffect, useRef, useState } from 'react';
import Input from '../components/input';
import ReCAPTCHA from 'react-google-recaptcha';
import axios from 'axios';
import { mutate } from 'swr';
function Login() {
    const [invalidMess, setInvalidMess] = useState<string>('');
    const [captchaCodeRes, setCaptchaCodeRes] = useState<string | null>('');
    console.log('key', process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY);
    const emailRef = useRef<null | {
        getValidateMess: () => string | undefined;
        getInputValue: () => string;
    }>(null);
    const passwordRef = useRef<null | {
        getValidateMess: () => string | undefined;
        getInputValue: () => string;
    }>(null);
    const reCaptchaRef = useRef<ReCAPTCHA | null>(null);
    const [isRemember, setIsRemember] = useState<boolean>(false);
    const [isWaitingRes, setIsWaitingRes] = useState<boolean>(false);
    const onSubmit = async (ev: FormEvent) => {
        ev.preventDefault();
        if (captchaCodeRes && emailRef.current && passwordRef.current) {
            try {
                let validateEmailMess = emailRef.current.getValidateMess();
                let validatePasswordMess = passwordRef.current.getValidateMess();
                if (!validateEmailMess && !validatePasswordMess) {
                    setIsWaitingRes(true);
                    setInvalidMess('');
                    const emailInput = ev.currentTarget.querySelector('input[name="email"]') as HTMLInputElement;
                    const passwordInput = ev.currentTarget.querySelector('input[name="password"]') as HTMLInputElement;

                    const response = await axios.post(
                        process.env.NEXT_PUBLIC_SERVER_SIDE_URL + '/login',
                        {
                            [emailInput.name]: emailInput.value,
                            [passwordInput.name]: passwordInput.value,
                            recaptchaResponse: captchaCodeRes,
                        },
                        { withCredentials: true },
                    );
                    setIsWaitingRes(false);
                    mutate(`${process.env.NEXT_PUBLIC_SERVER_SIDE_URL as string}/user-check`);
                }
            } catch (error: any) {
                setInvalidMess(error.response.data.message);
                setIsWaitingRes(false);
            }
        }
    };

    return (
        <form autoComplete="off" className="border-r-[3px] border-weak pr-[24px]" action="" onSubmit={onSubmit}>
            <h2 className="  text-center text-lg text-tl font-medium mb-5">Sign In</h2>
            <div className="relative">
                <Input
                    ref={emailRef}
                    name="email"
                    className="login-email-tm "
                    type="email"
                    placeholder="Email address"
                />
            </div>{' '}
            <div className="relative">
                <Input
                    ref={passwordRef}
                    name={'password'}
                    className="login-pwd-tm "
                    type="password"
                    placeholder="Password "
                />
            </div>
            <div className="flex items-center">
                <input
                    type="checkbox"
                    className="appearance-none remember-checkbox--tm peer/remember "
                    name=""
                    id="desk"
                    checked={isRemember}
                    onChange={() => {
                        setIsRemember(!isRemember);
                    }}
                />
                <div className="border-2  border-weak w-[18px] h-[18px] peer-checked/remember:bg-green-500 mr-[6px] cursor-pointer text-[rgb(var(--background-start-rgb))] peer-checked/remember:text-[rgb(var(--background-start-rgb))]">
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
            <div className="flex mt-4 justify-between items-center relative">
                {invalidMess && <span className="text-sm text-red-500 top-[-19px] absolute">{invalidMess}</span>}
                <input
                    type="submit"
                    value={'Login'}
                    className="text-tl bg-weak hover:bg-green-500 transition-all w-[80px] h-[40px] rounded-full"
                />
                {isWaitingRes && <LoadIcon className="w-6 h-6 ml  text-current" />} <p>Forgot your password?</p>
            </div>
        </form>
    );
}

export default Login;
