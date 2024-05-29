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

const EditIcon = ({ className }: iconProps) => {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" id="edit">
            <path
                fill="currentColor"
                d="M3.5,24h15A3.51,3.51,0,0,0,22,20.487V12.95a1,1,0,0,0-2,0v7.537A1.508,1.508,0,0,1,18.5,22H3.5A1.508,1.508,0,0,1,2,20.487V5.513A1.508,1.508,0,0,1,3.5,4H11a1,1,0,0,0,0-2H3.5A3.51,3.51,0,0,0,0,5.513V20.487A3.51,3.51,0,0,0,3.5,24Z"
            ></path>
            <path
                fill="currentColor"
                d="M9.455,10.544l-.789,3.614a1,1,0,0,0,.271.921,1.038,1.038,0,0,0,.92.269l3.606-.791a1,1,0,0,0,.494-.271l9.114-9.114a3,3,0,0,0,0-4.243,3.07,3.07,0,0,0-4.242,0l-9.1,9.123A1,1,0,0,0,9.455,10.544Zm10.788-8.2a1.022,1.022,0,0,1,1.414,0,1.009,1.009,0,0,1,0,1.413l-.707.707L19.536,3.05Zm-8.9,8.914,6.774-6.791,1.4,1.407-6.777,6.793-1.795.394Z"
            ></path>
        </svg>
    );
};
const GithubIconTemp = ({ className }: iconProps, ref: ForwardedRef<SVGSVGElement>) => {
    return (
        <svg ref={ref} viewBox="0 0 16 16" className={className} fill="currentColor" aria-hidden="true">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
        </svg>
    );
};
const ErrorIcon = ({ className }: iconProps) => (
    <svg
        className={classNames('', className)}
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        id="error"
    >
        <path
            fill="currentColor"
            d="M16 0C7.164 0 0 7.164 0 16s7.164 16 16 16 16-7.164 16-16S24.836 0 16 0zm0 30C8.28 30 2 23.72 2 16S8.28 2 16 2s14 6.28 14 14-6.28 14-14 14zm0-24a2 2 0 0 0-2 2v10a2 2 0 0 0 4 0V8a2 2 0 0 0-2-2zm-2 17.968a2 2 1080 1 0 4 0 2 2 1080 1 0-4 0z"
        ></path>
    </svg>
);
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
const CheckIcon = ({ className }: iconProps) => {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path
                fill="currentColor"
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
            />
        </svg>
    );
};
const Googleicon = ({ className }: iconProps) => {
    return (
        <svg className={classNames(className, '')} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" id="google">
            <path
                fill="#fbbb00"
                d="M113.47 309.408 95.648 375.94l-65.139 1.378C11.042 341.211 0 299.9 0 256c0-42.451 10.324-82.483 28.624-117.732h.014L86.63 148.9l25.404 57.644c-5.317 15.501-8.215 32.141-8.215 49.456.002 18.792 3.406 36.797 9.651 53.408z"
            ></path>
            <path
                fill="#518ef8"
                d="M507.527 208.176C510.467 223.662 512 239.655 512 256c0 18.328-1.927 36.206-5.598 53.451-12.462 58.683-45.025 109.925-90.134 146.187l-.014-.014-73.044-3.727-10.338-64.535c29.932-17.554 53.324-45.025 65.646-77.911h-136.89V208.176h245.899z"
            ></path>
            <path
                fill="#28b446"
                d="m416.253 455.624.014.014C372.396 490.901 316.666 512 256 512c-97.491 0-182.252-54.491-225.491-134.681l82.961-67.91c21.619 57.698 77.278 98.771 142.53 98.771 28.047 0 54.323-7.582 76.87-20.818l83.383 68.262z"
            ></path>
            <path
                fill="#f14336"
                d="m419.404 58.936-82.933 67.896C313.136 112.246 285.552 103.82 256 103.82c-66.729 0-123.429 42.957-143.965 102.724l-83.397-68.276h-.014C71.23 56.123 157.06 0 256 0c62.115 0 119.068 22.126 163.404 58.936z"
            ></path>
        </svg>
    );
};
const GithubIconBtn = ({ className }: iconProps) => {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="github">
            <path
                fill="currentColor"
                d="M7.999 0C3.582 0 0 3.596 0 8.032a8.031 8.031 0 0 0 5.472 7.621c.4.074.546-.174.546-.387 0-.191-.007-.696-.011-1.366-2.225.485-2.695-1.077-2.695-1.077-.363-.928-.888-1.175-.888-1.175-.727-.498.054-.488.054-.488.803.057 1.225.828 1.225.828.714 1.227 1.873.873 2.329.667.072-.519.279-.873.508-1.074-1.776-.203-3.644-.892-3.644-3.969 0-.877.312-1.594.824-2.156-.083-.203-.357-1.02.078-2.125 0 0 .672-.216 2.2.823a7.633 7.633 0 0 1 2.003-.27 7.65 7.65 0 0 1 2.003.271c1.527-1.039 2.198-.823 2.198-.823.436 1.106.162 1.922.08 2.125.513.562.822 1.279.822 2.156 0 3.085-1.87 3.764-3.652 3.963.287.248.543.738.543 1.487 0 1.074-.01 1.94-.01 2.203 0 .215.144.465.55.386A8.032 8.032 0 0 0 16 8.032C16 3.596 12.418 0 7.999 0z"
            ></path>
        </svg>
    );
};
const FacebookIcon = ({ className }: iconProps) => {
    return (
        <svg
            className={classNames(className, '')}
            xmlns="http://www.w3.org/2000/svg"
            width="2500"
            height="2500"
            viewBox="126.445 2.281 589 589"
            id="facebook"
        >
            <circle cx="420.945" cy="296.781" r="294.5" fill="#3c5a9a"></circle>
            <path
                fill="#fff"
                d="M516.704 92.677h-65.239c-38.715 0-81.777 16.283-81.777 72.402.189 19.554 0 38.281 0 59.357H324.9v71.271h46.174v205.177h84.847V294.353h56.002l5.067-70.117h-62.531s.14-31.191 0-40.249c0-22.177 23.076-20.907 24.464-20.907 10.981 0 32.332.032 37.813 0V92.677h-.032z"
            ></path>
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
                fill="currentColor"
                id="XMLID_225_"
                d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393
   c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393
   s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
            />
        </svg>
    );
};
const TagsIcon = ({ className }: iconProps) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className={className}
            width="20"
            height="20"
            id="tags"
        >
            <path
                className="scale-[0.045]"
                width={20}
                height={20}
                fill="currentColor"
                d="M472 239.2s-.1 0 0 0L282.1 48.1l-1.4-1.4h-.5c-7.5-7.2-16.1-10.9-27.1-11.1l-89.9-3.3-3.9-.1c-10.1.1-20 4.1-27.7 11.8l-27.1 27.2c7.4-6.6 16.6-10 26-10.1l3.8.1 89.8 3.3c11 .2 19.7 3.9 27.2 11.1h.5l1.4 1.4L443 268.1c10 10.8 10.7 28.2 0 38.9l29-28.9c10.6-10.7 10-28.1 0-38.9z"
            ></path>
            <path
                className="scale-[0.045]"
                fill="currentColor"
                d="M428 282.5h.3L238.6 91.4l-1.3-1.4h-.3c-7.5-7.2-15.9-10.9-26.9-11.1L120 75.6l-4-.1c-9.2.1-18.2 3.4-25.6 9.8-.3.3-.7.6-1 .9l-1.2 1.2-44.3 44.5C35.8 140 32 150.8 32 161.4v.1l.1 3.8 5.9 87.9v1.9c1 7.9 4.2 15.6 9.6 22l5.1 4.9L239 470.4l2.8 2.8c10.7 9.4 27.1 9 37.3-1.3l13.1-13.2c.5-.4.9-.8 1.4-1.3l26.9-27c-.2.1-.3.2-.5.4l108.3-109.3c10.6-10.7 10.7-28.2-.3-39zm-317.4-143c6.6-4 14.3-6.3 22.6-6.3 23.9 0 43.4 19.4 43.4 43.4 0 8.3-2.3 16-6.3 22.6-7.6 12.5-21.3 20.8-37 20.8-23.9 0-43.4-19.4-43.4-43.4-.1-15.8 8.2-29.5 20.7-37.1z"
            ></path>
        </svg>
    );
};
const TaskIcon = ({ className }: iconProps) => {
    return (
        <svg
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            data-name="LINE COLOR"
            viewBox="0 0 24 24"
            id="task"
        >
            <path
                fill="currentColor"
                d="M7,9.75a.75.75,0,0,1-.53-.22.78.78,0,0,1-.16-.24.73.73,0,0,1,0-.58.75.75,0,0,1,1.38,0A.75.75,0,0,1,7.75,9a.72.72,0,0,1-.06.29.78.78,0,0,1-.16.24A.75.75,0,0,1,7,9.75Z"
            ></path>
            <rect width="8" height="1.5" x="10" y="8.25" fill="currentColor"></rect>
            <path
                fill="currentColor"
                d="M7,14.75a.75.75,0,0,1-.53-.22.63.63,0,0,1-.16-.24A.72.72,0,0,1,6.25,14a.75.75,0,0,1,.22-.53.77.77,0,0,1,1.06,0,.75.75,0,0,1,.22.53.72.72,0,0,1-.06.29.74.74,0,0,1-.4.4A.72.72,0,0,1,7,14.75Z"
            ></path>
            <rect width="8" height="1.5" x="10" y="13.25" fill="currentColor"></rect>
            <path
                fill="currentColor"
                d="M7,19.75a.72.72,0,0,1-.29-.06.74.74,0,0,1-.4-.4.73.73,0,0,1,0-.58.75.75,0,0,1,1.38,0,.73.73,0,0,1,0,.58.63.63,0,0,1-.16.24A.75.75,0,0,1,7,19.75Z"
            ></path>
            <rect width="8" height="1.5" x="10" y="18.25" fill="currentColor"></rect>
            <path
                fill="currentColor"
                d="M20,2.25H15.75V1A.76.76,0,0,0,15,.25H9A.76.76,0,0,0,8.25,1V2.25H4A.76.76,0,0,0,3.25,3V23a.76.76,0,0,0,.75.75H20a.76.76,0,0,0,.75-.75V3A.76.76,0,0,0,20,2.25ZM9.75,1.75h4.5v2.5H9.75Zm9.5,20.5H4.75V3.75h3.5V5A.76.76,0,0,0,9,5.75h6A.76.76,0,0,0,15.75,5V3.75h3.5Z"
            ></path>
        </svg>
    );
};
const MessageIcon = ({ className }: iconProps) => {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" id="message">
            <defs>
                <circle id="a" cx="8.5" cy="10.5" r="1.5"></circle>
                <circle id="b" cx="12.5" cy="10.5" r="1.5"></circle>
                <circle id="c" cx="16.5" cy="10.5" r="1.5"></circle>
            </defs>
            <g fill="none" fill-rule="evenodd">
                <path
                    stroke="#4A4A4A"
                    d="m8.888 21.518 5.985-4.489H20a1.5 1.5 0 0 0 1.5-1.5V5A1.5 1.5 0 0 0 20 3.5H5A1.5 1.5 0 0 0 3.5 5v10.53a1.5 1.5 0 0 0 1.5 1.5h3.088v4.088a.5.5 0 0 0 .8.4z"
                ></path>
                <use fill="#FFF" xlinkHref="#a"></use>
                <circle cx="8.5" cy="10.5" r="1" stroke="#4A4A4A"></circle>
                <use fill="#FFF" xlinkHref="#b"></use>
                <circle cx="12.5" cy="10.5" r="1" stroke="#4A4A4A"></circle>
                <use fill="#FFF" xlinkHref="#c"></use>
                <circle cx="16.5" cy="10.5" r="1" stroke="#4A4A4A"></circle>
            </g>
        </svg>
    );
};
const SearchIcon = ({ className }: iconProps) => {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 101 101" id="search">
            <path
                fill="currentColor"
                d="M63.3 59.9c3.8-4.6 6.2-10.5 6.2-17 0-14.6-11.9-26.5-26.5-26.5S16.5 28.3 16.5 42.9 28.4 69.4 43 69.4c6.4 0 12.4-2.3 17-6.2l20.6 20.6c.5.5 1.1.7 1.7.7.6 0 1.2-.2 1.7-.7.9-.9.9-2.5 0-3.4L63.3 59.9zm-20.4 4.7c-12 0-21.7-9.7-21.7-21.7s9.7-21.7 21.7-21.7 21.7 9.7 21.7 21.7-9.7 21.7-21.7 21.7z"
            ></path>
        </svg>
    );
};
const FilterIcon = ({ className }: iconProps) => {
    return (
        <svg
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            enableBackground="new 0 0 32 32"
            viewBox="0 0 32 32"
            id="filter"
        >
            <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="2"
                d="M4.8772,4.9216l6.8975,9.1338c0.8371,1.1085,1.2899,2.4597,1.2899,3.8487v10.4141
c0,0.3546,0.4113,0.5507,0.6868,0.3273l3.371-2.733c0.5032-0.408,0.7955-1.0212,0.7955-1.669v-6.1332
c0-1.515,0.5386-2.9807,1.5196-4.1352l7.655-9.0095c0.542-0.6379,0.0886-1.618-0.7484-1.618H5.6609
C4.8502,3.3477,4.3886,4.2746,4.8772,4.9216z"
            ></path>
        </svg>
    );
};
const EyeIcon = ({ className }: iconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 576 512">
            <path
                fill="currentColor"
                d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"
            />
        </svg>
    );
};
const DownloadIcon = ({ className }: iconProps) => {
    return (
        <svg
            className={className}
            fill="currentColor"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 29.978 29.978"
            xmlSpace="preserve"
        >
            <g>
                <path
                    d="M25.462,19.105v6.848H4.515v-6.848H0.489v8.861c0,1.111,0.9,2.012,2.016,2.012h24.967c1.115,0,2.016-0.9,2.016-2.012
       v-8.861H25.462z"
                />
                <path
                    d="M14.62,18.426l-5.764-6.965c0,0-0.877-0.828,0.074-0.828s3.248,0,3.248,0s0-0.557,0-1.416c0-2.449,0-6.906,0-8.723
       c0,0-0.129-0.494,0.615-0.494c0.75,0,4.035,0,4.572,0c0.536,0,0.524,0.416,0.524,0.416c0,1.762,0,6.373,0,8.742
       c0,0.768,0,1.266,0,1.266s1.842,0,2.998,0c1.154,0,0.285,0.867,0.285,0.867s-4.904,6.51-5.588,7.193
       C15.092,18.979,14.62,18.426,14.62,18.426z"
                />
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
            </g>
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
const ViewDocsIcon = ({ className }: iconProps) => {
    return (
        <svg
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            x="0px"
            y="0px"
            viewBox="0 0 100 125"
            xmlSpace="preserve"
        >
            <path
                className="scale-[2] translate-x-[-40px] translate-y-[-40px]"
                fill={'currentColor'}
                d="M42,36h-6.6l6.6-6.6V36z M64,69c0.7,0,1.4-0.1,2-0.3V70c0,1.1-0.9,2-2,2H36c-1.1,0-2-0.9-2-2V38h9c0.6,0,1-0.4,1-1v-9h20  c1.1,0,2,0.9,2,2v23.3c-0.6-0.2-1.3-0.3-2-0.3c-4.4,0-8,3.6-8,8S59.6,69,64,69z M40,51c0,0.6,0.4,1,1,1h18c0.6,0,1-0.4,1-1  s-0.4-1-1-1H41C40.4,50,40,50.4,40,51z M50,63c0-0.6-0.4-1-1-1h-8c-0.6,0-1,0.4-1,1s0.4,1,1,1h8C49.6,64,50,63.6,50,63z M54,57  c0-0.6-0.4-1-1-1H41c-0.6,0-1,0.4-1,1s0.4,1,1,1h12C53.6,58,54,57.6,54,57z M73.6,70.6c-0.2,0.2-0.4,0.3-0.6,0.3s-0.4-0.1-0.6-0.3  l-4.8-4.8c-1,0.8-2.2,1.2-3.6,1.2c-3.3,0-6-2.7-6-6s2.7-6,6-6c3.3,0,6,2.7,6,6c0,1.3-0.5,2.6-1.2,3.6l4.8,4.8  C73.9,69.7,73.9,70.3,73.6,70.6z M68.3,61c0-2.4-1.9-4.3-4.3-4.3s-4.3,1.9-4.3,4.3s1.9,4.3,4.3,4.3C66.4,65.3,68.3,63.4,68.3,61z"
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
const SortIcon = ({ className }: iconProps) => {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
            <path
                fill="currentColor"
                d="M137.4 41.4c12.5-12.5 32.8-12.5 45.3 0l128 128c9.2 9.2 11.9 22.9 6.9 34.9s-16.6 19.8-29.6 19.8H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l128-128zm0 429.3l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128c-12.5 12.5-32.8 12.5-45.3 0z"
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

const DeleteTextIcon = ({ className }: iconProps) => {
    return (
        <svg
            className={classNames(className, '')}
            width="16"
            data-e2e=""
            height="16"
            viewBox="0 0 48 48"
            fill="rgba(22, 24, 35, .34)"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M24 46C36.1503 46 46 36.1503 46 24C46 11.8497 36.1503 2 24 2C11.8497 2 2 11.8497 2 24C2 36.1503 11.8497 46 24 46ZM15.1466 30.7323L21.8788 24.0001L15.1466 17.2679C14.756 16.8774 14.756 16.2442 15.1466 15.8537L15.8537 15.1466C16.2442 14.756 16.8774 14.756 17.2679 15.1466L24.0001 21.8788L30.7323 15.1466C31.1229 14.756 31.756 14.756 32.1466 15.1466L32.8537 15.8537C33.2442 16.2442 33.2442 16.8774 32.8537 17.2679L26.1214 24.0001L32.8537 30.7323C33.2442 31.1229 33.2442 31.756 32.8537 32.1466L32.1466 32.8537C31.756 33.2442 31.1229 33.2442 30.7323 32.8537L24.0001 26.1214L17.2679 32.8537C16.8774 33.2442 16.2442 33.2442 15.8537 32.8537L15.1466 32.1466C14.756 31.756 14.756 31.1229 15.1466 30.7323Z"
            ></path>
        </svg>
    );
};
const MicroIcon = ({ className }: iconProps) => {
    return (
        <svg
            className={classNames('', className)}
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            data-icon="microphone"
            data-container-transform="translate(3)"
            viewBox="0 0 16 20"
            x="0px"
            y="0px"
        >
            <path
                fill="currentColor"
                d="M4.5 0c-1.4 0-2.5 1.1-2.5 2.5v5c0 1.4 1.1 2.5 2.5 2.5s2.5-1.1 2.5-2.5v-5c0-1.4-1.1-2.5-2.5-2.5zm-4.125 6.188a.5.5 0 0 0-.375.5v.813c0 2.302 1.763 4.184 4 4.438v3.063h-2c-.6 0-1 .4-1 1h7c0-.6-.4-1-1-1h-2v-3.063c2.237-.254 4-2.136 4-4.438v-.813a.5.5 0 1 0-1 0v.813c0 1.927-1.573 3.5-3.5 3.5s-3.5-1.573-3.5-3.5v-.813a.5.5 0 0 0-.563-.5.5.5 0 0 0-.063 0z"
                transform="translate(3)"
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
const LanguageIcon = ({ className }: iconProps) => {
    return (
        <svg className={classNames(className, '')} viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
            <text
                style={{
                    fill: '#333',
                    fontFamily: 'Arial, sans-serif',
                    fontSize: '24.3px',
                    whiteSpace: 'pre',
                    transformBox: 'fill-box',
                    transformOrigin: '50% 50%',
                }}
                x="34.722"
                y="221.701"
                transform="matrix(11.179448, -0.000092, 0.288258, 10.319783, 90.741333, 83.703629)"
            >
                A
            </text>
            <text
                style={{
                    whiteSpace: 'pre',
                    fill: '#333',
                    fontFamily: 'Arial, sans-serif',
                    fontSize: '24.3px',
                }}
                x="215.278"
                y="65.104"
                transform="matrix(15.40007, 0, 0, 14.676361, -3089.625488, -571.367737)"
            >
                A
            </text>
        </svg>
    );
};
const BookOpenIcon = ({ className }: iconProps) => {
    return (
        <svg
            className={classNames(className, '')}
            width="800px"
            height="800px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3 6.1519V19.3095C3.99197 18.8639 5.40415 18.4 7 18.4C8.58915 18.4 9.9999 18.8602 11 19.3094V6.1519C10.7827 6.02653 10.4894 5.8706 10.1366 5.71427C9.31147 5.34869 8.20352 5 7 5C5.26385 5 3.74016 5.72499 3 6.1519ZM13 6.1519V19.3578C13.9977 18.9353 15.41 18.5 17 18.5C18.596 18.5 20.0095 18.9383 21 19.3578V6.1519C20.2598 5.72499 18.7362 5 17 5C15.7965 5 14.6885 5.34869 13.8634 5.71427C13.5106 5.8706 13.2173 6.02653 13 6.1519ZM12 4.41985C11.7302 4.26422 11.3734 4.07477 10.9468 3.88572C9.96631 3.45131 8.57426 3 7 3C4.69187 3 2.76233 3.97065 1.92377 4.46427C1.30779 4.82687 1 5.47706 1 6.11223V20.0239C1 20.6482 1.36945 21.1206 1.79531 21.3588C2.21653 21.5943 2.78587 21.6568 3.30241 21.3855C4.12462 20.9535 5.48348 20.4 7 20.4C8.90549 20.4 10.5523 21.273 11.1848 21.6619C11.6757 21.9637 12.2968 21.9725 12.7959 21.6853C13.4311 21.32 15.0831 20.5 17 20.5C18.5413 20.5 19.9168 21.0305 20.7371 21.4366C21.6885 21.9075 23 21.2807 23 20.0593V6.11223C23 5.47706 22.6922 4.82687 22.0762 4.46427C21.2377 3.97065 19.3081 3 17 3C15.4257 3 14.0337 3.45131 13.0532 3.88572C12.6266 4.07477 12.2698 4.26422 12 4.41985Z"
                fill="#000000"
            />
        </svg>
    );
};
const LockIcon = ({ className }: iconProps) => {
    return (
        <svg
            className={classNames(className, '')}
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            x="0px"
            y="0px"
            viewBox="0 0 72 90"
            enable-background="new 0 0 72 72"
        >
            <g>
                <path
                    fill="currentColor"
                    d="M60.4,30.7h-3.9c-0.5,0-1-0.4-1-1v-9.2c0-10.6-8.2-19.6-18.8-20C25.6,0.1,16.4,9,16.4,20.1v9.7   c0,0.5-0.4,1-1,1h-3.9c-1.5,0-2.7,1.2-2.7,2.7v35.4c0,1.5,1.2,2.7,2.7,2.7h48.8c1.5,0,2.7-1.2,2.7-2.7V33.4   C63.1,31.9,61.9,30.7,60.4,30.7z M22.5,20.1c0-7.7,6.4-13.9,14.2-13.5c7.3,0.4,12.9,6.6,12.9,13.9v9.3c0,0.5-0.4,1-1,1H23.4   c-0.5,0-1-0.4-1-1V20.1z"
                />
            </g>
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
const SendMessageIcon = ({ className }: iconProps) => {
    return (
        <svg className={className} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <path
                fill="currentColor"
                d="m27.45 15.11-22-11a1 1 0 0 0 -1.08.12 1 1 0 0 0 -.33 1l2.65 9.77h11.31v2h-11.31l-2.69 9.74a1 1 0 0 0 1 1.26 1 1 0 0 0 .45-.11l22-11a1 1 0 0 0 0-1.78z"
            />
            <path d="m0 0h32v32h-32z" fill="none" />
        </svg>
    );
};

const ArrowLineIcon = ({ className }: iconProps) => {
    return (
        <svg
            className={className}
            fill="currentColor"
            height="800px"
            width="800px"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 31.143 31.143"
            xmlSpace="preserve"
        >
            <g>
                <g id="c100_arrow">
                    <path
                        d="M0,15.571c0.001,1.702,1.383,3.081,3.085,3.083l17.528-0.002l-4.738,4.739c-1.283,1.284-1.349,3.301-0.145,4.507
                            c1.205,1.201,3.222,1.138,4.507-0.146l9.896-9.898c1.287-1.283,1.352-3.301,0.146-4.506c-0.033-0.029-0.068-0.051-0.1-0.08
                            c-0.041-0.043-0.07-0.094-0.113-0.139l-9.764-9.762c-1.268-1.266-3.27-1.316-4.474-0.111c-1.205,1.205-1.153,3.208,0.111,4.476
                            l4.755,4.754H3.085C1.381,12.485,0,13.865,0,15.571z"
                    />
                </g>
                <g id="Capa_1_46_"></g>
            </g>
        </svg>
    );
};
const LoadIcon = ({ className }: iconProps) => {
    return (
        <svg
            className={classNames('animate-spin', className)}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
        >
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
        </svg>
    );
};
export type { iconProps };
export {
    Googleicon,
    GithubIconBtn,
    FacebookIcon,
    ThemeIcon,
    LogoIcon,
    AngleBracket,
    GearIcon,
    GithubIcon,
    PrayIcon,
    ArrowIcon,
    ViewDocsIcon,
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
    LockIcon,
    BookOpenIcon,
    LanguageIcon,
    MicroIcon,
    DeleteTextIcon,
    CheckIcon,
    MessageIcon,
    TagsIcon,
    TaskIcon,
    SearchIcon,
    FilterIcon,
    SortIcon,
    EditIcon,
    DownloadIcon,
    EyeIcon,
    SendMessageIcon,
    LoadIcon,
    ArrowLineIcon,
    ErrorIcon,
};
