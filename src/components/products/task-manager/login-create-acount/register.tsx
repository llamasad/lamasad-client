import { ArrowIcon, LoadIcon, ReloadIcon } from '@/components/icons';
import Input from '../components/input';
import { Dispatch, SetStateAction, useState, useRef, useEffect } from 'react';
import { Input as IP, InputNumber } from 'antd';
import axios, { AxiosError } from 'axios';
import CountDown from '../components/count-down';
import classNames from 'classnames';
import { useRouter } from 'next/navigation';
import { mutate } from 'swr';

function Register({ setX }: { setX: Dispatch<SetStateAction<number>> }) {
    const [OTP, SetOTP] = useState<string>('');
    const [isWaitingOTP, setIsWaitingOTP] = useState<boolean>(false);
    const [verificationRes, setVerificationRes] = useState<{ text: string; type: 'error' | 'success' }>({
        text: '',
        type: 'error',
    });
    const [isWaitingRes, setIsWaitingRes] = useState<boolean>(false);
    const [isWaitingVerifyOTP, setIsWaitingVerifyOTP] = useState<boolean>(false);
    const [OTPVerifyRes, setOTPVerifyRes] = useState<{ text: string; type: 'error' | 'success' }>({
        text: '',
        type: 'error',
    });
    const router = useRouter();
    const emailRef = useRef<null | {
        getValidateMess: () => string | undefined;
        getInputValue: () => string;
    }>(null);
    const passwordRef = useRef<null | {
        getValidateMess: () => string | undefined;
        getInputValue: () => string;
    }>(null);
    useEffect(() => {
        if (OTP) {
            setIsWaitingVerifyOTP(true);
            axios
                .post((process.env.NEXT_PUBLIC_SERVER_SIDE_URL as string) + '/email-verify', {
                    email: emailRef.current?.getInputValue(),
                    token: OTP,
                })
                .then((res) => {
                    setIsWaitingVerifyOTP(false);
                    setOTPVerifyRes({ text: res.data, type: 'success' });
                })
                .catch((error) => {
                    setIsWaitingVerifyOTP(false);
                    setOTPVerifyRes({
                        text: error.response.data as string,
                        type: 'error',
                    });
                });
        }
    }, [OTP]);

    return (
        <form
            onSubmit={(ev) => {
                ev.preventDefault();
            }}
            className="ml-[26px] relative border-r-[3px] border-weak pr-[24px] min-w-[325px]"
            action=""
        >
            <span
                className="flex absolute items-center top-[4px] cursor-pointer"
                onClick={() => {
                    setX(0);
                }}
            >
                <ArrowIcon className="w-[14px] h-[14px] rotate-90 mr-1" /> <span>Sign In</span>
            </span>
            <h2 className="  text-center text-lg text-tl font-medium mb-5">Sign Up</h2>
            <div className="relative">
                <Input
                    isLocked={!(isWaitingOTP || isWaitingOTP)}
                    ref={emailRef}
                    name="email"
                    className="login-email-tm "
                    type="email"
                    placeholder="Email address"
                />
            </div>{' '}
            <div className="relative">
                <Input
                    isLocked={!(isWaitingOTP || isWaitingOTP)}
                    ref={passwordRef}
                    name="password"
                    className="login-pwd-tm "
                    type="password"
                    placeholder="Password "
                />
            </div>
            <div className="flex relative items-center mb-[2px]">
                <button
                    onClick={() => {
                        if (passwordRef.current && emailRef.current) {
                            let validateEmailMess = emailRef.current.getValidateMess();
                            let validatePasswordMess = passwordRef.current.getValidateMess();
                            let email = emailRef.current.getInputValue();
                            if (!validatePasswordMess && !validateEmailMess) {
                                setIsWaitingRes(true);
                                axios
                                    .post((process.env.NEXT_PUBLIC_SERVER_SIDE_URL as string) + '/send-verify', {
                                        email: email,
                                    })
                                    .then((res) => {
                                        setIsWaitingOTP(true);
                                        setIsWaitingRes(false);
                                        setVerificationRes({ text: res.data as string, type: 'success' });
                                    })
                                    .catch((error: AxiosError) => {
                                        const axiosError = error as AxiosError;
                                        setIsWaitingRes(false);

                                        setVerificationRes({
                                            text: axiosError.response?.data as string,
                                            type: 'error',
                                        });
                                    });
                            }
                        }
                    }}
                    className="text-tl bg-weak hover:bg-green-500 transition-all w-[150px] h-[40px] mb-[20px] rounded-full"
                >
                    Send Code
                </button>
                {isWaitingRes && <LoadIcon className="w-6 h-6 ml-2 mb-5  text-current" />}{' '}
                {verificationRes.text && (
                    <span
                        className={classNames('text-sm absolute bottom-[-2px] ', {
                            'text-red-500': verificationRes.type === 'error',
                            'text-green-500': verificationRes.type === 'success',
                        })}
                    >
                        {verificationRes.text}
                    </span>
                )}
            </div>
            <div className="flex items-center mb-5 relative">
                <IP.OTP
                    disabled={!(verificationRes.type === 'success') || OTPVerifyRes.type === 'success'}
                    value={OTP}
                    formatter={(str) => str.toUpperCase()}
                    onChange={(value) => {
                        SetOTP(value);
                    }}
                />
                {isWaitingOTP && (
                    <CountDown
                        isStart={isWaitingOTP}
                        countNumber={60}
                        callback={(intervalId) => {
                            clearInterval(intervalId);

                            setTimeout(() => setIsWaitingOTP(false), 0);
                        }}
                    />
                )}
                {isWaitingVerifyOTP && <LoadIcon className="w-6 h-6 ml-2 mb-5  text-current" />}
                {OTPVerifyRes.text && (
                    <span
                        className={classNames('text-sm absolute bottom-[-20px]', {
                            'text-red-500': OTPVerifyRes.type === 'error',
                            'text-green-500': OTPVerifyRes.type === 'success',
                        })}
                    >
                        {OTPVerifyRes.text}
                    </span>
                )}
            </div>
            <div className="flex mt-4 jus-between items-center">
                <button
                    onClick={() => {
                        if (OTPVerifyRes.type === 'success' && verificationRes.type === 'success') {
                            axios
                                .post(
                                    (process.env.NEXT_PUBLIC_SERVER_SIDE_URL as string) + '/register',
                                    {
                                        email: emailRef.current?.getInputValue(),
                                        password: passwordRef.current?.getInputValue(),
                                    },
                                    {
                                        // Include credentials (cookies, authentication headers)
                                        withCredentials: true,
                                    },
                                )
                                .then((res) => {
                                    res.data.accessToken && localStorage.setItem('access-token', res.data.accessToken);
                                    mutate(`${process.env.NEXT_PUBLIC_SERVER_SIDE_URL as string}/user-check`);
                                })
                                .catch((error) => {});
                        }
                    }}
                    className={classNames('text-tl transition-all w-[150px] h-[40px] rounded-full', {
                        'bg-green-500': OTPVerifyRes.type === 'success' && verificationRes.type === 'success',
                        ' bg-weak ': !(OTPVerifyRes.type === 'success' && verificationRes.type === 'success'),
                    })}
                >
                    Register
                </button>
            </div>
        </form>
    );
}

export default Register;
