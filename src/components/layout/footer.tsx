import Image from 'next/image';

function Footer() {
    return (
        <footer className="border-t border-weak">
            <div className="my-4">
                <Image className="mx-auto mb-1" src="/logo-llama.svg" alt="Llama Logo" width={50} height={50} />
                <p className="text-center">&copy; 2024 Llamasad</p>
            </div>
        </footer>
    );
}

export default Footer;
