'use client';
import { Dispatch, FC, ReactNode, SetStateAction, createContext, useEffect, useState } from 'react';
import CreateTaskDetail from '@/components/products/task-manager/components/create-task-detail';
import { Transition } from 'react-transition-group';
export const ComponentChildContext = createContext<{
    ComponentChild: FC | undefined | ReactNode;
    mountChild: (fc: FC) => void;
    unmountChild: () => void;
}>({ ComponentChild: undefined, mountChild: () => {}, unmountChild: () => {} });

function OverlayWrapper({ children }: { children: ReactNode }) {
    const [ComponentChild, setComponentChild] = useState<FC | undefined | ReactNode>();
    const [show, setShow] = useState<boolean>(false);

    const duration = 300;
    const defaultStyle = {
        transition: `transform ${duration}ms ease-in-out, opacity ${duration}ms ease-in-out`,
        opacity: 0,
        transform: 'scale(0)',
    };
    const mountChild = (fc: FC) => {
        setComponentChild(fc);
        setShow(true);
    };
    const unmountChild = () => {
        setShow(false);
    };
    const transitionStyles = {
        entering: { opacity: 0, transform: 'scale(0)' },
        entered: { opacity: 1, transform: 'scale(1)' },
        exiting: { opacity: 0, transform: 'scale( 0)' },
    };

    const handleExited = () => {
        setComponentChild(undefined);
    };
    useEffect(() => {
        const body = document.querySelector('.macbook_layout--body') as HTMLElement;
        if (ComponentChild) {
            body.scrollTo({
                top: 0,
            });

            body.style.overflow = 'hidden';
        }
        return () => {
            body.style.overflowY = 'scroll';
        };
    }, [ComponentChild]);
    return (
        <ComponentChildContext.Provider value={{ ComponentChild, mountChild, unmountChild }}>
            <Transition in={show} timeout={duration} onExited={handleExited} unmountOnExit>
                {(state) => (
                    <div className="absolute  top-0 right-0 left-0 bottom-0 z-10">
                        <div className="h-full w-full backdrop-blur-sm absolute top-0 left-0"></div>
                        <div
                            style={{
                                ...defaultStyle,
                                ...(transitionStyles as any)[state],
                            }}
                            className="mx-auto relative z-20  overflow-y-scroll h-full"
                        >
                            {' '}
                            {ComponentChild as ReactNode}
                        </div>
                    </div>
                )}
            </Transition>
            {children}
        </ComponentChildContext.Provider>
    );
}

export default OverlayWrapper;
