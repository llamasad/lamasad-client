import { useEffect, useState } from 'react';

function CountDown({
    isStart,
    countNumber,
    callback,
}: {
    isStart: boolean;
    countNumber: number;
    callback: (intervalId: any) => void;
}) {
    const [number, setNumber] = useState<number>(countNumber);
    useEffect(() => {
        if (isStart) {
            var intervalId = setInterval(() => {
                setNumber((state) => {
                    state = state ? state - 1 : number;
                    !state && callback(intervalId);
                    return state;
                });
            }, 1000);
        }
        return () => {
            if (intervalId) {
                clearInterval(intervalId);
            }
        };
    });
    return <div className="text-lg font-medium ml-5">{number}</div>;
}

export default CountDown;
