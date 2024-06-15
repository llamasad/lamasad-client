'use client';
import InputCreateTask from './input-create-task';
import Select from 'react-select';
import { Dispatch, SetStateAction, useCallback, useContext, useEffect, useRef, useState } from 'react';
import { ComponentChildContext } from '@/components/wrapper-components/overlay-wrapper';
import { ErrorIcon, ExitIcon, LoadIcon } from '@/components/icons';
import apiFecther from '@/service/task-manger-fetcher/api-fetcher';
import { useSelector } from '@/lib/redux';
import { selectTMUser } from '@/lib/redux/slices/tm-user-slice';
import Tippy from '@tippyjs/react/headless';
import { useRouter } from '@/navigation/next-intl';
import PercentBar from './percent-bar';
const statusOptions = [
    { value: 'todo', label: 'Todo' },
    { value: 'yetToStart', label: 'Yet to start' },
    { value: 'inProgress', label: 'In progress' },
    { value: 'onHold', label: 'On hold' },
    { value: 'completed', label: 'Completed' },
];
const typeOpntions = [
    { value: 'Macro', label: 'Macro Task' },
    { value: 'Micro', label: 'Micro Task' },
];
const selectTheme = (theme: any) => ({
    ...theme,

    colors: {
        ...theme.colors,

        primary25: 'rgb(34 197 94)',
        primary: 'rgb(34 197 94)',
    },
});
const selectStyle = {
    control: (baseStyles: any, state: any) => ({
        ...baseStyles,
        borderColor: 'var(--weak-color)',
        color: 'currentcolor',
        backgroundColor: 'var(--cooler-color)',
    }),
    singleValue: (provided: any) => ({
        ...provided,
        color: 'currentcolor', // Change color of the selected item's text
    }),

    menu: (provided: any) => ({
        ...provided,
        backgroundColor: 'var(--cooler-color)', // Change background color of the option wrapper
        color: 'currentColor', // Change text color of the option wrapper
    }),
    input: (provided: any, state: any) => ({
        ...provided,
        color: 'currentcolor', // Change the color of the input text
    }),
};
// this function have two arguments one is iiRequire and input element this function handle check input
const hanldeInputValid = (
    isRequired: boolean,
    input: HTMLInputElement | null,
    setErrorMessages: Dispatch<SetStateAction<string[]>>,
) => {
    input;
    if (isRequired) {
        if (input && input.value && input.value.trim() !== '' && input.value !== '0%') {
            return input.value;
        } else {
            setErrorMessages((pre) => [...pre, `${input && input.name} field is required`]);
            return '';
        }
    } else {
        if (input && input.value) {
            return input.value;
        } else {
            return '';
        }
    }
};

function AddTaskItemForm({
    task_id,
    project_id,
    setMicroTasks,
}: {
    task_id: string;
    project_id?: number | null;
    setMicroTasks: Dispatch<SetStateAction<any>>;
}) {
    const [errorMessages, setErrorMessages] = useState<string[]>([]);
    const [isProjectLoading, setIsProjectLoading] = useState<boolean>(true);
    const [projects, setProjects] = useState<Array<any>>([]);
    const [projectValue, setProjectValue] = useState<string | undefined>('');
    const startTimeRef = useRef<HTMLInputElement>(null);
    const EndTimeRef = useRef<HTMLInputElement>(null);
    const [isSubmiting, setIsSubmiting] = useState<boolean>(false);
    const router = useRouter();
    const percentRef = useRef<HTMLInputElement>(null);
    const validateTimes = useCallback((setValidateMess: Dispatch<SetStateAction<string>>) => {
        if (startTimeRef.current && EndTimeRef.current) {
            if (new Date(startTimeRef.current.value) >= new Date(EndTimeRef.current.value)) {
                setValidateMess('Invalid time');
                return false;
            } else {
                setValidateMess('');
                return true;
            }
        }
    }, []);
    return (
        <>
            <div className=" min-w-[280px] w-full relative   px-[2px] transition-all mt-10">
                <div className="space-y-5 ">
                    <InputCreateTask name="title" className="w-full" type="text" placeholder="Title" />
                    <PercentBar onEditMode={true} ref={percentRef} />
                    <div className="flex items-center">
                        <span className="w-[30%]">Start time</span>
                        <InputCreateTask
                            validateTimes={validateTimes}
                            ref={startTimeRef}
                            className="w-[70%]"
                            name="endTime"
                            type="date"
                        />
                    </div>
                    <div className="flex items-center">
                        <span className="w-[30%]">End time</span>
                        <InputCreateTask validateTimes={validateTimes} ref={EndTimeRef} name="startTime" type="date" />
                    </div>
                    <Select
                        name="status"
                        placeholder="Choose status (Not required)"
                        options={statusOptions}
                        theme={selectTheme}
                        styles={selectStyle}
                        className="h-[36px]"
                        isSearchable={false}
                    />
                    <div className="flex items-center">
                        <input
                            onClick={(ev) => {
                                setErrorMessages([]);

                                const parentElement = ev.currentTarget.parentNode?.parentNode as HTMLDivElement;
                                const title = hanldeInputValid(
                                    true,
                                    parentElement.querySelector('input[name="title"]') as HTMLInputElement,
                                    setErrorMessages,
                                );

                                const startTime = hanldeInputValid(
                                    true,
                                    parentElement.querySelector('input[name="startTime"]') as HTMLInputElement,
                                    setErrorMessages,
                                );
                                const endTime = hanldeInputValid(
                                    true,
                                    parentElement.querySelector('input[name="endTime"]') as HTMLInputElement,
                                    setErrorMessages,
                                );

                                const status = hanldeInputValid(
                                    false,
                                    parentElement.querySelector('input[name="status"]') as HTMLInputElement,
                                    setErrorMessages,
                                );
                                const percent = hanldeInputValid(true, percentRef.current, setErrorMessages);
                                //
                                if (title && startTime && endTime && percent) {
                                    setIsSubmiting(true);
                                    apiFecther('/api/task?own_task=' + task_id.split('-')[1], 'POST', {
                                        title: title,
                                        project: project_id,
                                        startTime: startTime.split('-').reverse().join('/'),
                                        endTime: endTime.split('-').reverse().join('/'),
                                        type: 'Micro',
                                        status: status,
                                        limits: percentRef.current?.value,
                                    })
                                        .then((rs: any) => {
                                            setIsSubmiting(false);
                                            if (rs) {
                                                router.push({
                                                    pathname: '/showcase/product/task-manager/task-detail/[id]',
                                                    params: { id: 'micro' + '-' + rs._id },
                                                });
                                            }
                                        })
                                        .catch((err) => {
                                            setIsSubmiting(false);
                                        });
                                }
                            }}
                            type="submit"
                            value="submit"
                            className="bg-cooler rounded w-1/2 h-[38px] cursor-pointer hover:bg-green-500"
                        />
                        <div>
                            {isSubmiting && <LoadIcon className="w-6 h-6 ml-2" />}
                            {errorMessages.length > 0 && (
                                <Tippy
                                    interactive={true}
                                    hideOnClick={true}
                                    trigger="click"
                                    render={(attrs) => (
                                        <ul
                                            {...attrs}
                                            className="pl-6 border border-yellow-300 list-decimal text-yellow bg-[rgb(var(--background-start-rgb))] p-2 rounded"
                                        >
                                            {errorMessages.map((err, index) => (
                                                <li key={index}>{err}</li>
                                            ))}
                                        </ul>
                                    )}
                                >
                                    <span>
                                        <ErrorIcon className="w-6 h-6 ml-2" />
                                    </span>
                                </Tippy>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            {/* )} */}
            {/* </Transition> */}
        </>
    );
}

export default AddTaskItemForm;
