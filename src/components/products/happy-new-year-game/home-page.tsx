import Link from 'next/link';

function HpnyMainPage() {
    return (
        <div className="my-5 space-y-3 text-center mx-auto">
            <video
                className=""
                src="https://res.cloudinary.com/dtgvcd01s/video/upload/v1718534183/hpny-game_xt2zky.mp4"
                controls
            ></video>
            <p className="text-lg">
                I developed a game during the Tet holiday in my first year of college, utilizing only 2D arrays and C++
                structures.
            </p>
            <Link
                target="_blank"
                href={'https://gist.github.com/llamasad/cada94c61627f6076997c3c752ec0383'}
                className="text-pimary text-lg"
            >
                Reference
            </Link>
        </div>
    );
}

export default HpnyMainPage;
