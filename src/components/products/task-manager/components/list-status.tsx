'use client';
import { Ref, useContext } from 'react';
import Status from './status';
import { MacbookDisplayType } from '@/components/wrapper-components/macbook-wrapper';
import { Dispatch, SetStateAction } from 'react';
import { TypeOfSatatusInterface } from './status';
interface params {
    filter: Array<'macro' | 'micro' | 'inProject' | 'notInProject'>;
    status: keyof TypeOfSatatusInterface | 'all';
    sort: 'a-z' | 'z-a' | 'latest' | 'oldest';
    page: number;
    search?: string;
}
interface RefObject<T> {
    readonly current: T;
}
function ListStatus({
    statusRef,
    display,
    state,
    hasMacWrap,
}: {
    display: MacbookDisplayType;
    state: { setParams: Dispatch<SetStateAction<params>>; params: params };
    statusRef: RefObject<{
        status: { todo: number; yetToStart: number; inProgress: number; onHold: number; completed: number };
    }>;
    hasMacWrap: boolean;
}) {
    return (
        <div className="flex w-full mt-[20px] overflow-x-auto">
            <Status
                hasMacWrap={hasMacWrap}
                setParams={state.setParams}
                display={display}
                total={statusRef.current.status.todo}
                statusType="todo"
            />
            <Status
                hasMacWrap={hasMacWrap}
                setParams={state.setParams}
                display={display}
                total={statusRef.current.status.yetToStart}
                statusType="yetToStart"
            />
            <Status
                hasMacWrap={hasMacWrap}
                setParams={state.setParams}
                display={display}
                total={statusRef.current.status.inProgress}
                statusType="inProgress"
            />
            <Status
                hasMacWrap={hasMacWrap}
                setParams={state.setParams}
                display={display}
                total={statusRef.current.status.onHold}
                statusType="onHold"
            />
            <Status
                hasMacWrap={hasMacWrap}
                setParams={state.setParams}
                display={display}
                total={statusRef.current.status.completed}
                statusType="completed"
            />
        </div>
    );
}

export default ListStatus;
