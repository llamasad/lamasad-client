function ShowcaseLayout({ modal, children }: { children: React.ReactNode; modal: React.ReactNode }) {
    return (
        <>
            {children}
            {modal}
        </>
    );
}

export default ShowcaseLayout;
