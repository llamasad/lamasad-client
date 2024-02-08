import classNames from 'classnames';
import { forwardRef, ForwardedRef } from 'react';
interface Events {
    handleMouseEnter?: () => void;
    onClick?: () => void;
}

interface iconProps {
    width?: string;
    height?: string;
    className?: string;
    events?: Events;
    direction?: 'top' | 'bottom' | 'right' | 'left';
    translateX?: string;
}

const GithubIconTemp = ({ className }: iconProps, ref: ForwardedRef<SVGSVGElement>) => {
    return (
        <svg ref={ref} viewBox="0 0 16 16" className={className} fill="currentColor" aria-hidden="true">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
        </svg>
    );
};
const GithubIcon = forwardRef(GithubIconTemp);
const AngleBracket = ({ direction = 'right', width, height, className, translateX = '' }: iconProps) => {
    const direct = { left: '180', right: '0', bottom: '90', top: '-90' };
    return (
        <svg
            className={classNames(className)}
            width={width}
            height={height}
            xmlns="http://www.w3.org/2000/svg"
            style={{ transform: `rotate(${direct[direction]}deg) ${translateX ? `translateX(${translateX}px)` : ''}` }}
            fill="none"
            viewBox="0 0 27 78"
            aria-hidden="true"
        >
            <path
                fill="currentColor"
                d="M26.52 77.21h-5.75c-6.83 0-12.38-5.56-12.38-12.38V48.38C8.39 43.76 4.63 40 .01 40v-4c4.62 0 8.38-3.76 8.38-8.38V12.4C8.38 5.56 13.94 0 20.77 0h5.75v4h-5.75c-4.62 0-8.38 3.76-8.38 8.38V27.6c0 4.34-2.25 8.17-5.64 10.38 3.39 2.21 5.64 6.04 5.64 10.38v16.45c0 4.62 3.76 8.38 8.38 8.38h5.75v4.02Z"
            ></path>
        </svg>
    );
};
const LogoIcon = ({ className }: { className?: string }) => {
    return (
        <svg viewBox="50 100 300 300" className={className} xmlns="http://www.w3.org/2000/svg">
            <defs>
                <radialGradient
                    gradientUnits="userSpaceOnUse"
                    cx="200.221"
                    cy="366.507"
                    r="122.649"
                    id="gradient-0"
                    gradientTransform="matrix(1.007078, 0.042465, -0.042129, 0.999112, 8.499948, -11.071819)"
                >
                    <stop offset="0" style={{ stopColor: 'rgb(50, 50, 50)' }} />
                    <stop offset="1" style={{ stopColor: 'rgb(0% 0% 0%)' }} />
                </radialGradient>
            </defs>
            <path
                style={{ strokeWidth: '10px', fill: "url('#gradient-0')", stroke: 'rgb(255, 255, 255)' }}
                d="M 77.257 380.383 L 78.125 257.395 L 213.488 122.342 L 323.439 247.902 L 323.439 120.661 L 262.374 179.861 L 202.734 242.764 L 162.09 178.695 L 262.374 180.403 L 323.439 249.625 L 323.439 383.855 L 202.844 242.765 L 77.257 380.383 Z"
            />
        </svg>
    );
};

const GearIcon = ({ className }: iconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="5 0 505 500">
            <path
                style={{ fill: 'currentColor', stroke: 'rgb(0, 0, 0)' }}
                transform="matrix(0.868056058883667, 0, 0, 0.21701399981975555, -50.347225189208984, 254.1835479736328)"
                d="M 227.755 538.5 L 228.245 538.5 L 228.348 539.247 A 1.3 1.3 0 0 1 228.64 539.368 L 229.241 538.913 L 229.587 539.259 L 229.132 539.86 A 1.3 1.3 0 0 1 229.253 540.152 L 230 540.255 L 230 540.745 L 229.253 540.848 A 1.3 1.3 0 0 1 229.132 541.14 L 229.587 541.741 L 229.241 542.087 L 228.64 541.632 A 1.3 1.3 0 0 1 228.348 541.753 L 228.245 542.5 L 227.755 542.5 L 227.652 541.753 A 1.3 1.3 0 0 1 227.36 541.632 L 226.759 542.087 L 226.413 541.741 L 226.868 541.14 A 1.3 1.3 0 0 1 226.747 540.848 L 226 540.745 L 226 540.255 L 226.747 540.152 A 1.3 1.3 0 0 1 226.868 539.86 L 226.413 539.259 L 226.759 538.913 L 227.36 539.368 A 1.3 1.3 0 0 1 227.652 539.247 Z M 228 539.9 A 0.6 0.6 0 0 0 228 541.1 A 0.6 0.6 0 0 0 228 539.9"
            />
            <path
                style={{
                    fill: 'currentColor',
                    stroke: 'rgb(0, 0, 0)',
                    strokeWidth: '0.59803px',
                    transformOrigin: '489px 1.73088px',
                }}
                transform="matrix(5.058496952057, 0.042076006532, -0.04137500003, 4.974094867706, -206.555472767989, -2573.44678852812)"
                d="M 484.017 520.786 L 493.983 520.786 L 497.549 535.616 A 34.946 34.946 0 0 1 504.232 538.048 L 516.496 528.98 L 524.13 535.385 L 517.329 549.038 A 34.946 34.946 0 0 1 520.885 555.197 L 536.109 556.134 L 537.84 565.948 L 523.854 572.035 A 34.946 34.946 0 0 1 522.619 579.039 L 533.679 589.542 L 528.697 598.172 L 514.07 593.846 A 34.946 34.946 0 0 1 508.622 598.417 L 510.343 613.572 L 500.979 616.981 L 492.556 604.265 A 34.946 34.946 0 0 1 485.444 604.265 L 477.021 616.981 L 467.657 613.572 L 469.378 598.417 A 34.946 34.946 0 0 1 463.93 593.846 L 449.303 598.172 L 444.321 589.542 L 455.381 579.039 A 34.946 34.946 0 0 1 454.146 572.035 L 440.16 565.948 L 441.891 556.134 L 457.115 555.197 A 34.946 34.946 0 0 1 460.671 549.038 L 453.87 535.385 L 461.504 528.98 L 473.768 538.048 A 34.946 34.946 0 0 1 480.451 535.616 Z M 489 552.966 A 16.534 16.534 0 0 0 489 586.034 A 16.534 16.534 0 0 0 489 552.966"
            />
        </svg>
    );
};
const ArrowIcon = ({ className }: iconProps) => {
    return (
        <svg
            className={className}
            fill="currentColor"
            height="800px"
            width="800px"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 330 330"
        >
            <path
                id="XMLID_225_"
                d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393
   c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393
   s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
            />
        </svg>
    );
};
const ShieldIcon = ({ className }: iconProps) => {
    return (
        <svg
            className={className}
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 256 256"
            enableBackground="new 0 0 256 256"
            xmlSpace="preserve"
            stroke="rbg(64,64,64)"
        >
            <path
                fill="#404040"
                d="M128,10L29.5,39.7v74.3c0,48.3,39.9,100.8,98.5,131.9c58.6-31.1,98.5-83.6,98.5-131.9V39.7L128,10z M128,229c-50.3-29-83.6-74.5-83.6-114.9V50.8L128,25.5V229z"
            />
        </svg>
    );
};
const ReloadIcon = ({ className }: iconProps) => {
    return (
        <svg
            className={className}
            fill="#000000"
            height="800px"
            width="800px"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 489.645 489.645"
            xmlSpace="preserve"
        >
            <g>
                <path
                    fill="currentColor"
                    d="M460.656,132.911c-58.7-122.1-212.2-166.5-331.8-104.1c-9.4,5.2-13.5,16.6-8.3,27c5.2,9.4,16.6,13.5,27,8.3   c99.9-52,227.4-14.9,276.7,86.3c65.4,134.3-19,236.7-87.4,274.6c-93.1,51.7-211.2,17.4-267.6-70.7l69.3,14.5   c10.4,2.1,21.8-4.2,23.9-15.6c2.1-10.4-4.2-21.8-15.6-23.9l-122.8-25c-20.6-2-25,16.6-23.9,22.9l15.6,123.8   c1,10.4,9.4,17.7,19.8,17.7c12.8,0,20.8-12.5,19.8-23.9l-6-50.5c57.4,70.8,170.3,131.2,307.4,68.2   C414.856,432.511,548.256,314.811,460.656,132.911z"
                />
            </g>
        </svg>
    );
};
const ExportIcon = ({ className }: iconProps) => {
    return (
        <svg
            className={className}
            fill="#000000"
            height="800px"
            width="800px"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 67.671 67.671"
            xmlSpace="preserve"
        >
            <g>
                <path
                    fill="currentColor"
                    d="M52.946,23.348H42.834v6h10.112c3.007,0,5.34,1.536,5.34,2.858v26.606c0,1.322-2.333,2.858-5.34,2.858H14.724   c-3.007,0-5.34-1.536-5.34-2.858V32.207c0-1.322,2.333-2.858,5.34-2.858h10.11v-6h-10.11c-6.359,0-11.34,3.891-11.34,8.858v26.606   c0,4.968,4.981,8.858,11.34,8.858h38.223c6.358,0,11.34-3.891,11.34-8.858V32.207C64.286,27.239,59.305,23.348,52.946,23.348z"
                />
                <path
                    fill="currentColor"
                    d="M24.957,14.955c0.768,0,1.535-0.293,2.121-0.879l3.756-3.756v13.028v6v11.494c0,1.657,1.343,3,3,3s3-1.343,3-3V29.348v-6   V10.117l3.959,3.959c0.586,0.586,1.354,0.879,2.121,0.879s1.535-0.293,2.121-0.879c1.172-1.171,1.172-3.071,0-4.242l-8.957-8.957   C35.492,0.291,34.725,0,33.958,0c-0.008,0-0.015,0-0.023,0s-0.015,0-0.023,0c-0.767,0-1.534,0.291-2.12,0.877l-8.957,8.957   c-1.172,1.171-1.172,3.071,0,4.242C23.422,14.662,24.189,14.955,24.957,14.955z"
                />
            </g>
        </svg>
    );
};
const TabManagerIcon = ({ className }: iconProps) => {
    return (
        <svg className={className} viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
            <defs></defs>
            <rect
                fill="currentColor"
                x="93.749"
                y="85.938"
                width="240"
                height="240"
                style={{ stroke: 'rgb(64, 64, 64)', strokeWidth: '34px' }}
                rx="18.23"
                ry="18.23"
            ></rect>
            <rect
                fill="currentColor"
                x="161.457"
                y="146.265"
                width="240"
                height="240.452"
                style={{ stroke: 'rgb(64, 64, 64)', strokeWidth: '34px' }}
                rx="18.229"
                ry="18.229"
            ></rect>
        </svg>
    );
};
const PlusIcon = ({ className }: iconProps) => {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512">
            <path
                fill="currentColor"
                d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
            />
        </svg>
    );
};
const PrayIcon = ({ className }: iconProps) => {
    return (
        <svg className={className} viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">
            <path
                fill={'currentColor'}
                d="m256 128c35.35 0 64-28.65 64-64s-28.65-64-64-64-64 28.65-64 64 28.65 64 64 64zm-30.63 169.75c14.06 16.72 39 19.09 55.97 5.22l88-72.02c17.09-13.98 19.59-39.19 5.62-56.28-13.97-17.11-39.19-19.59-56.31-5.62l-57.44 47-38.91-46.31c-15.44-18.39-39.22-27.92-64-25.33-24.19 2.48-45.25 16.27-56.37 36.92l-49.37 92.03c-23.4 43.64-8.69 96.37 34.19 123.75l44.81 34.89h-91.56c-22.09 0-40 17.91-40 40s17.91 40 40 40h208c34.08 0 53.77-42.79 28.28-68.28l-109.86-109.86 34.8-64.87z"
            />
        </svg>
    );
};
const ExitIcon = ({ className }: iconProps) => {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" height="16" width="12" viewBox="0 0 384 512">
            <path
                fill="currentColor"
                d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
            />
        </svg>
    );
};
const OpenIcon = ({ className }: iconProps) => {
    return (
        <svg
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 128 128"
            width="128px"
            height="128px"
        >
            <path
                fill="currentColor"
                d="M 84 11 C 82.3 11 81 12.3 81 14 C 81 15.7 82.3 17 84 17 L 106.80078 17 L 60.400391 63.400391 C 59.200391 64.600391 59.200391 66.499609 60.400391 67.599609 C 61.000391 68.199609 61.8 68.5 62.5 68.5 C 63.2 68.5 63.999609 68.199609 64.599609 67.599609 L 111 21.199219 L 111 44 C 111 45.7 112.3 47 114 47 C 115.7 47 117 45.7 117 44 L 117 14 C 117 12.3 115.7 11 114 11 L 84 11 z M 24 31 C 16.8 31 11 36.8 11 44 L 11 104 C 11 111.2 16.8 117 24 117 L 84 117 C 91.2 117 97 111.2 97 104 L 97 59 C 97 57.3 95.7 56 94 56 C 92.3 56 91 57.3 91 59 L 91 104 C 91 107.9 87.9 111 84 111 L 24 111 C 20.1 111 17 107.9 17 104 L 17 44 C 17 40.1 20.1 37 24 37 L 69 37 C 70.7 37 72 35.7 72 34 C 72 32.3 70.7 31 69 31 L 24 31 z"
            />
        </svg>
    );
};
const TabControlIcon = ({ className }: iconProps) => {
    return (
        <svg className={className} viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
            <defs></defs>
            <rect
                fill={'currentColor'}
                x="63.14"
                y="100"
                width="349.037"
                height="268.552"
                style={{ strokeWidth: '24px', transformOrigin: '237.658px 247px', stroke: 'rgb(80,80,80)' }}
                rx="36.033"
                ry="36.033"
            ></rect>
            <line
                style={{ strokeWidth: '24px', stroke: 'rgb(80,80,80)' }}
                x1="142.465"
                y1="100"
                x2="143.172"
                y2="372.071"
            ></line>
            <rect
                x="75"
                y="140.212"
                width="53"
                height="20.526"
                style={{ stroke: 'rgba(0, 0, 0, 0)', transformOrigin: '241.324px 240px', fill: 'rgb(122, 122, 122)' }}
                ry="9.518"
                rx="9.518"
            ></rect>
            <rect
                x="75"
                y="170"
                width="53"
                height="21"
                style={{ stroke: 'rgba(0, 0, 0, 0)', fill: 'rgb(122, 122, 122)' }}
                ry="9.418"
                rx="9.418"
            ></rect>
            <rect
                x="75"
                y="200"
                width="53"
                height="21"
                rx="9.177"
                ry="9.177"
                style={{ stroke: 'rgba(0, 0, 0, 0)', fill: 'rgb(122, 122, 122)' }}
            ></rect>
        </svg>
    );
};
const MinimizeIcon = ({ className }: iconProps) => {
    return (
        <svg className={className} viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
            <path
                style={{ transformBox: 'fill-box', transformOrigin: '50% 50%' }}
                fill="currentColor"
                d="M 327.284 123.166 L 452.422 266.198 L 202.146 266.198 L 327.284 123.166 Z"
                transform="matrix(-0.707106, -0.707107, 0.707107, -0.707106, -19.146084, 5.251894)"
            ></path>
            <path
                style={{ transformBox: 'fill-box', transformOrigin: '50% 50%' }}
                fill="currentColor"
                d="M 259.977 268.434 L 387.457 417.564 L 132.497 417.564 L 259.977 268.434 Z"
                transform="matrix(0.707107, 0.707107, -0.707107, 0.707107, -63.776882, -34.945254)"
            ></path>
        </svg>
    );
};
const FullScreenIcon = ({ className }: iconProps) => {
    return (
        <svg className={className} viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
            <defs></defs>
            <path
                fill="currentColor"
                d="M 290.948 55.011 L 422.531 201.112 L 159.365 201.112 L 290.948 55.011 Z"
                style={{ transformBox: 'fill-box', transformOrigin: '50% 50%' }}
                transform="matrix(0.7071060538291931, 0.7071070075035095, -0.7071070075035095, 0.7071060538291931, 19.965287637240323, -13.888892486775362)"
            ></path>
            <path
                fill="currentColor"
                d="M 157.145 182.581 L 284.646 331.712 L 29.646 331.712 L 157.145 182.581 Z"
                style={{ transformBox: 'fill-box', transformOrigin: '50% 50%' }}
                transform="matrix(-0.707108, -0.707106, 0.707106, -0.707108, -0.000004, 0.000014)"
            ></path>
        </svg>
    );
};
const ThemeIcon = ({ width, height, className, events }: iconProps) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            className={className}
            viewBox="0 0 683 683"
        >
            <path
                fill=" currentColor"
                fillRule="nonzero"
                d="M341.5 0C530.105 0 683 152.895 683 341.5S530.105 683 341.5 683 0 530.105 0 341.5 152.895 0 341.5 0Zm0 21C164.493 21 21 164.493 21 341.5S164.493 662 341.5 662 662 518.507 662 341.5 518.507 21 341.5 21Z"
            ></path>
            <circle className="eclipse" cx="342" cy="342" r="104.908" fill=" currentColor">
                {' '}
            </circle>
            <g fillRule="nonzero">
                <path
                    className="rays origin-[50%_50%]"
                    fill="currentColor"
                    d="M350 114v66h-15v-66zM350 504v66h-15v-66zM570 334v15h-66v-15zM180 334v15h-66v-15zM509.035 186.22l-46.516 46.517-11.1-11.101 46.515-46.517zM233.11 462.145l-46.516 46.516-11.1-11.1 46.516-46.516zM509.035 496.503l-11.101 11.1-46.516-46.515 11.101-11.1zM233.639 221.107l-11.101 11.1-46.516-46.515 11.101-11.1z"
                ></path>
            </g>
        </svg>
    );
};
const MinusIcon = ({ className }: iconProps) => {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512">
            <path
                fill="currentColor"
                d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"
            />
        </svg>
    );
};
export type { iconProps };
export {
    ThemeIcon,
    LogoIcon,
    AngleBracket,
    GearIcon,
    GithubIcon,
    PrayIcon,
    ArrowIcon,
    OpenIcon,
    ExitIcon,
    MinusIcon,
    MinimizeIcon,
    FullScreenIcon,
    TabControlIcon,
    ShieldIcon,
    ExportIcon,
    TabManagerIcon,
    PlusIcon,
    ReloadIcon,
};
