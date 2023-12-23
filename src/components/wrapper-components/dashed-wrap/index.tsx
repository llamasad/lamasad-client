import { ReactNode, ReactPropTypes } from 'react';

function DashedWrap({ children }: { children: ReactNode }) {
    return (
        <main className="relative  px-[50px]  py-[50px] box-content  w-auto mt-[60px] ">
            {children}
            <div className="absolute  z-[-10] inset-y-[0] inset-x-[-50px] border-y-[1px] border-dashed border-[#8F8F8F]"></div>
            <div className="absolute  z-[-10] inset-x-[0] inset-y-[-50px] border-x-[1px] border-dashed  border-[#8F8F8F]"></div>

            <svg
                aria-hidden="true"
                className="absolute top-[-37px] left-[-37px]"
                data-side="top-left"
                fill="none"
                height="74"
                viewBox="0 0 75 75"
                width="74"
            >
                <path
                    d="M74 37.5C74 30.281 71.8593 23.2241 67.8486 17.2217C63.838 11.2193 58.1375 6.541 51.4679 3.7784C44.7984 1.0158 37.4595 0.292977 30.3792 1.70134C23.2989 3.1097 16.7952 6.58599 11.6906 11.6906C6.58599 16.7952 3.1097 23.2989 1.70134 30.3792C0.292977 37.4595 1.0158 44.7984 3.7784 51.4679C6.541 58.1375 11.2193 63.838 17.2217 67.8486C23.2241 71.8593 30.281 74 37.5 74"
                    opacity="var(--line-opacity)"
                    stroke="#8F8F8F"
                    strokeDasharray="2 2"
                ></path>
                <defs>
                    <radialGradient
                        cx="0"
                        cy="0"
                        gradientTransform="translate(37.5 37.5) rotate(90) scale(36.5)"
                        gradientUnits="userSpaceOnUse"
                        id="paint0_angular_25_2122"
                        r="1"
                    >
                        <stop></stop>
                        <stop offset="0.5" stopOpacity="0.34"></stop>
                        <stop offset="1"></stop>
                    </radialGradient>
                </defs>
            </svg>
            <svg
                aria-hidden="true"
                className="absolute bottom-[-37px] right-[-37px] rotate-180"
                data-side="top-left"
                fill="none"
                height="74"
                viewBox="0 0 75 75"
                width="74"
            >
                <path
                    d="M74 37.5C74 30.281 71.8593 23.2241 67.8486 17.2217C63.838 11.2193 58.1375 6.541 51.4679 3.7784C44.7984 1.0158 37.4595 0.292977 30.3792 1.70134C23.2989 3.1097 16.7952 6.58599 11.6906 11.6906C6.58599 16.7952 3.1097 23.2989 1.70134 30.3792C0.292977 37.4595 1.0158 44.7984 3.7784 51.4679C6.541 58.1375 11.2193 63.838 17.2217 67.8486C23.2241 71.8593 30.281 74 37.5 74"
                    opacity="var(--line-opacity)"
                    stroke="#8F8F8F"
                    strokeDasharray="2 2"
                ></path>
                <defs>
                    <radialGradient
                        cx="0"
                        cy="0"
                        gradientTransform="translate(37.5 37.5) rotate(90) scale(36.5)"
                        gradientUnits="userSpaceOnUse"
                        id="paint0_angular_25_2122"
                        r="1"
                    >
                        <stop></stop>
                        <stop offset="0.5" stopOpacity="0.34"></stop>
                        <stop offset="1"></stop>
                    </radialGradient>
                </defs>
            </svg>
        </main>
    );
}

export default DashedWrap;
