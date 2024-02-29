import { Dispatch, SetStateAction } from 'react';
import BtnWrapper from '../wrappers/btn-wrapper';
import { Googleicon, GithubIconBtn, FacebookIcon } from '@/components/icons';
function OtherWayLogin({ setX, x }: { setX: Dispatch<SetStateAction<number>>; x: number }) {
    return (
        <div className="ml-[20px] flex flex-col">
            <h2 className="text-center text-lg text-tl font-medium  ">Sign In By</h2>
            <div className="flex flex-col justify-center space-y-5 flex-1">
                <BtnWrapper className="block ">
                    <FacebookIcon className="w-[24px] mr-[8px] h-[24px]" /> Facebook
                </BtnWrapper>
                <BtnWrapper className="block">
                    <Googleicon className="w-[24px] mr-[8px] h-[24px]" /> Google
                </BtnWrapper>
                <BtnWrapper className="block">
                    <GithubIconBtn className="w-[24px]  mr-[8px] h-[24px]" /> Github
                </BtnWrapper>
            </div>
            {x ? (
                ''
            ) : (
                <span className="block  mb-[8px]">
                    No account?{' '}
                    <button
                        onClick={() => {
                            setX(-350);
                        }}
                        className="text-green-500 ml-[4px]"
                    >
                        Sign up
                    </button>
                </span>
            )}
        </div>
    );
}

export default OtherWayLogin;
