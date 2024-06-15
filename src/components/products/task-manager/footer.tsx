import images from '@/assets/images';
import Image from 'next/image';

function Footer() {
    return (
        <footer className="mt-16 mb-2">
            <div className="footer border-t-2 border-weak">
                <div className="footer__container space-y-2">
                    <div className="footer__content">
                        <div className="footer__content__logo flex justify-center">
                            <Image className="w-20 h-20" src={images.logo} alt="Logo" />
                        </div>
                    </div>
                    <div className="footer__content  flex justify-center">
                        <p className="text-center">
                            It is a website designed for educational purposes, with some features still under
                            development.
                        </p>
                    </div>

                    <div className="footer__copy  flex justify-center">
                        <p>© 2024 Task Manager. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
