import { LogoIcon } from '../icons';

function HomeLoading() {
    return (
        <div className="home-loading fixed flex flex-col items-center justify-center to-[rgb(var(--background-end-rgb))] from-[rgb(var(--background-start-rgb))] inset-0 bg-gradient-to-b">
            <LogoIcon fill="currentColor" className=" w-20 h-20 mb-2 text-black" />
            <div className="w-32 h-2 round overflow-hidden rounded-full bg-gray-500 bg-opacity-50">
                <div className="home-loading-move w-10 h-2 bg-current"></div>
            </div>
        </div>
    );
}

export default HomeLoading;
