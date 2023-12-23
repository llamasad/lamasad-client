import classNames from 'classnames';

interface Events {
    handleMouseEnter: () => void;
}

interface iconProps {
    width?: string;
    height?: string;
    className?: string;
    events?: Events;
    direction?: 'top' | 'bottom' | 'right' | 'left';
    translateX?: string;
}

const GithubIcon = ({ className }: iconProps) => {
    return (
        <svg viewBox="0 0 16 16" className={className} fill="currentColor" aria-hidden="true">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
        </svg>
    );
};

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
export type { iconProps };
export { ThemeIcon, LogoIcon, AngleBracket, GearIcon, GithubIcon, ArrowIcon };
