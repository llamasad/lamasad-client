// import HpnyMainPage from '@/components/products/happy-new-year-game/home-page';
import dynamic from 'next/dynamic';
const HpnyMainPage = dynamic(() => import('@/components/products/happy-new-year-game/home-page'));
function HpnyPage() {
    return <HpnyMainPage />;
}

export default HpnyPage;
