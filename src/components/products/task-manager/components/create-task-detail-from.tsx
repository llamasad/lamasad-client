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
import { mutate } from 'swr';
import classNames from 'classnames';
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
        if (input && input.value) {
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

function CreateTaskDetailForm({
    setIsCreateTaskDetail,
    hasMacWrap,
}: {
    setIsCreateTaskDetail?: Dispatch<SetStateAction<boolean>>;
    hasMacWrap: boolean;
}) {
    // const [show, setShow] = useState(false);
    const TMUser = useSelector(selectTMUser);
    const [errorMessages, setErrorMessages] = useState<string[]>([]);
    const [isProjectLoading, setIsProjectLoading] = useState<boolean>(true);
    const [projects, setProjects] = useState<Array<any>>([]);
    const { unmountChild } = useContext(ComponentChildContext);
    const [projectValue, setProjectValue] = useState<string | undefined>('');
    const startTimeRef = useRef<HTMLInputElement>(null);
    const EndTimeRef = useRef<HTMLInputElement>(null);
    const [isSubmiting, setIsSubmiting] = useState<boolean>(false);
    const [isFire, setIsFire] = useState<boolean>(false);
    const router = useRouter();
    const validateTimes = useCallback((setValidateMess: Dispatch<SetStateAction<string>>) => {
        startTimeRef.current, EndTimeRef.current;
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
    useEffect(() => {
        if (TMUser && TMUser._id) {
            apiFecther<{ data: Array<any> }>(
                `/api/project?${encodeURIComponent('user_id')}=${encodeURIComponent(TMUser?._id)}`,
                'GET',
            )
                .then((rs) => {
                    if (rs && !rs.data.length) {
                        setProjects(rs.data);
                    }
                    setIsProjectLoading(false);
                })
                .catch((err) => {
                    setIsProjectLoading(false);
                });
        }
    }, [TMUser?._id]);
    const duration = 300;
    const defaultStyle = {
        transition: `transform ${duration}ms ease-in-out, opacity ${duration}ms ease-in-out`,
        opacity: 0,
        transform: 'scale(0)',
    };
    // useEffect(() => {
    //     setShow(true);
    // }, []);
    const transitionStyles = {
        entering: { opacity: 0, transform: 'scale(0)' },
        entered: { opacity: 1, transform: 'scale(1)' },
        exiting: { opacity: 0, transform: 'scale( 0)' },
    };

    // const handleExited = () => {
    //     SetChildComponent(undefined);
    // };
    return (
        <>
            {/* <Transition in={show} timeout={duration} onExited={handleExited} unmountOnExit> */}
            {/* {(state) => ( */}
            <div
                // style={{
                //     ...defaultStyle,
                //     ...(transitionStyles as any)[state],
                // }}
                className="shadow-weak shadow-sm mx-auto w-[360px] relative mx- bg-[rgb(var(--background-start-rgb))] mt-[60px]  px-[20px] transition-all  py-[40px] rounded"
            >
                <span
                    onClick={() => {
                        unmountChild && unmountChild();
                        setIsCreateTaskDetail && setIsCreateTaskDetail(false);
                    }}
                >
                    <ExitIcon className="absolute w-[20px] h-[20px] right-[8px] top-[8px] cursor-pointer" />
                </span>
                <div className="space-y-5 ">
                    <InputCreateTask name="title" className="w-full" type="text" placeholder="Title" />
                    <Select
                        isLoading={isProjectLoading}
                        onChange={(vl) => {
                            setProjectValue(vl?.value);
                        }}
                        placeholder="Choose Project (Not required)"
                        options={projects}
                        theme={selectTheme}
                        styles={selectStyle}
                        className="h-[36px]"
                        name="project"
                    />
                    {projectValue && (
                        <Select
                            name="relationshipType"
                            placeholder="Choose relationship (Not required)"
                            options={typeOpntions}
                            theme={selectTheme}
                            styles={selectStyle}
                            className="h-[36px]"
                            isSearchable={false}
                        />
                    )}
                    {projectValue && (
                        <Select
                            isMulti
                            name="relationship"
                            placeholder="Choose relationship (Not required)"
                            options={typeOpntions}
                            theme={selectTheme}
                            styles={selectStyle}
                            className="h-[36px]"
                            isSearchable={false}
                        />
                    )}
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
                        name="type"
                        placeholder="Choose type (Required)"
                        options={typeOpntions}
                        theme={selectTheme}
                        styles={selectStyle}
                        className="h-[36px]"
                        isSearchable={false}
                    />
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
                                const project = hanldeInputValid(
                                    false,
                                    parentElement.querySelector('input[name="project"]') as HTMLInputElement,
                                    setErrorMessages,
                                );
                                const relationshipType = hanldeInputValid(
                                    false,
                                    parentElement.querySelector('input[name="relationshipType"]') as HTMLInputElement,
                                    setErrorMessages,
                                );
                                const relationship = hanldeInputValid(
                                    parentElement.querySelector('input[name="relationshipType"]') &&
                                        (
                                            parentElement.querySelector(
                                                'input[name="relationshipType"]',
                                            ) as HTMLInputElement
                                        ).value
                                        ? true
                                        : false,
                                    parentElement.querySelector('input[name="relationship"]') as HTMLInputElement,
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
                                const type = hanldeInputValid(
                                    true,
                                    parentElement.querySelector('input[name="type"]') as HTMLInputElement,
                                    setErrorMessages,
                                );
                                const status = hanldeInputValid(
                                    false,
                                    parentElement.querySelector('input[name="status"]') as HTMLInputElement,
                                    setErrorMessages,
                                );

                                //
                                endTime.split('-').reverse().join('/');
                                if (
                                    (title &&
                                        startTime &&
                                        endTime &&
                                        type &&
                                        !parentElement.querySelector('input[name="relationshipType"]')) ||
                                    relationship
                                        ? true
                                        : false
                                ) {
                                    setIsSubmiting(true);
                                    setIsFire(true);
                                    apiFecther('/api/task', 'POST', {
                                        title: title,
                                        project: project,
                                        relationshipType: relationshipType,
                                        relationship: relationship,
                                        startTime: startTime.split('-').reverse().join('/'),
                                        endTime: endTime.split('-').reverse().join('/'),
                                        type: type,
                                        status: status,
                                    })
                                        .then((rs: any) => {
                                            setIsSubmiting(false);
                                            if (rs) {
                                                hasMacWrap &&
                                                    router.push({
                                                        pathname: '/showcase/product/task-manager/task-detail/[id]',
                                                        params: { id: type.toLowerCase() + '-' + rs._id },
                                                    });
                                                !hasMacWrap &&
                                                    (window.location.href = `/showcase/product/task-manager/task-detail/${type.toLowerCase()}-${
                                                        rs._id
                                                    }`);
                                                unmountChild && unmountChild();
                                                setIsCreateTaskDetail && setIsCreateTaskDetail(false);
                                                setIsFire(false);
                                            }
                                        })
                                        .catch((err) => {
                                            setIsSubmiting(false);
                                            setIsFire(false);
                                        });
                                }
                            }}
                            type="submit"
                            value="submit"
                            className={classNames(
                                'bg-cooler rounded w-1/2 h-[38px] cursor-pointer hover:bg-green-500',
                                { 'pointer-events-none': isFire },
                            )}
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

export default CreateTaskDetailForm;
