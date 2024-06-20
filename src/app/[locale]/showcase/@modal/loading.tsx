import Overlay from '@/components/overlay';

function Loading() {
    return (
        <>
            <Overlay />
            <div className={'flex items-center justify-center fixed inset-0  z-50 '}>
                <l-tail-chase size="80" speed="1.75" color="currentColor"></l-tail-chase>{' '}
            </div>
        </>
    );
}

export default Loading;
