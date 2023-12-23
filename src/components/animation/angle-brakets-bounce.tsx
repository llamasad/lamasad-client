import { ReactNode } from 'react';
import { AngleBracket } from '../icons';
function AngleBracketsBounce({ children }: { children: ReactNode }) {
    return (
        <>
            <AngleBracket className="think-bracket--left " height="120px" />
            {children}
            <AngleBracket className="think-bracket--right  relative top-[-1px]" height="120px " direction="left" />
        </>
    );
}

export default AngleBracketsBounce;
