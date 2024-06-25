'use client';
import { Dispatch, SetStateAction, useRef, useState } from 'react';
import ActivityFormField from './activity-form-field';
import PercentBar from './percent-bar';
import type { InputRef } from 'antd';
import apiFecther from '@/service/task-manger-fetcher/api-fetcher';
import HistoryApiDispatch from '@/service/task-manger-fetcher/history-api-dispatch';
import classNames from 'classnames';

function AddActivityItemForm({
    task_id,
    setActivities,
    setIsShow,
}: {
    task_id: string;
    setActivities: Dispatch<SetStateAction<any>>;
    setIsShow: Dispatch<SetStateAction<boolean>>;
}) {
    const [errorMessages, setErrorMessages] = useState<string>('');
    const titleRef = useRef<InputRef>(null);
    const requestRef = useRef<any>(null);
    const percentRef = useRef<HTMLInputElement>(null);
    const [isFire, setIsFire] = useState<boolean>(true);
    return (
        <div>
            <ActivityFormField
                ref={titleRef}
                name={'title'}
                type={'text'}
                fieldValue=""
                onEditMode={true}
                tilte={'title'}
            />
            <ActivityFormField
                ref={requestRef}
                fieldValue=""
                name={'request'}
                type={'textarea'}
                onEditMode={true}
                tilte={'request'}
            />
            <div>
                <h2 className="my-2 text-lg mb-2.5 text-tl">limits</h2>
                <PercentBar onEditMode={true} ref={percentRef} />
            </div>
            <button
                onClick={() => {
                    task_id;
                    if (
                        !titleRef.current?.input?.value ||
                        !requestRef.current?.resizableTextArea?.textArea.value ||
                        !Number(percentRef.current?.value.split('%')[0])
                    ) {
                        setErrorMessages('Please fill all fields');
                        return;
                    }
                    setErrorMessages('');
                    // add atcivity
                    setIsFire(true);
                    apiFecther('/api/activity?task_id=' + task_id, 'POST', {
                        title: titleRef.current?.input?.value,
                        request: requestRef.current?.resizableTextArea?.textArea.value,
                        limits: percentRef.current?.value,
                    })
                        .then((res: any) => {
                            setActivities((prev: any) => {
                                return [...prev, res];
                            });
                            setIsShow(false);
                            setIsFire(false);
                        })
                        .catch((err) => {
                            setIsFire(false);
                            setErrorMessages('Something went wrong');
                        });
                }}
                className={classNames('hover:bg-green-500 border border-current w-full py-2 rounded-md mt-4', {
                    'pointer-events-none': isFire,
                })}
            >
                Add
            </button>
            {errorMessages && <span className="mt-3 text-sm text-red-500">{errorMessages}</span>}{' '}
        </div>
    );
}

export default AddActivityItemForm;
