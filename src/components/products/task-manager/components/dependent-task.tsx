import { EditIcon } from '@/components/icons';
import useDependentTasksFetcher from '@/hooks/use-dependent-tasks-fetcher';
import { use, useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import Select, { GroupBase, MultiValue, SelectInstance } from 'react-select';
import OverlayWrapper from '../wrappers/overlay-wrapper';
import useTasksFetcher from '@/hooks/use-tasks-fetcher';
import useUserTasksFetcher from '@/hooks/use-user-tasks-fetcher';
const selectStyle = {
    valueContainer: (provided: any) => ({ ...provided, padding: '0', width: '100%' }),

    control: (baseStyles: any, state: any) => ({
        ...baseStyles,
        borderColor: 'transparent', // Set border color to transparent
        '&:hover': {
            borderColor: 'transparent', // Ensure border color remains transparent on hover
        },
        outline: 'none',
        boxShadow: 'none',
        color: 'currentcolor',
        backgroundColor: 'var(--cooler-color)',
    }),
    placeholder: (provided: any) => ({
        ...provided,
        color: 'currentColor !important', // Change placeholder color
    }),
    option: (provided: any) => ({
        ...provided,
        zIndex: 9999, // Set your desired z-index value
    }),

    singleValue: (provided: any) => ({
        ...provided,
        color: 'currentcolor', // Change color of the selected item's text
    }),
    dropdownIndicator: (provided: any) => ({
        ...provided,
        display: 'none', // Hide the default arrow indicator
    }),
    indicatorSeparator: (provided: any) => ({
        ...provided,
        display: 'none', // Hide the default separator between the arrow and the input
    }),
    menu: (provided: any) => ({
        ...provided,
        backgroundColor: 'var(--cooler-color)', // Change background color of the option wrapper
        color: 'currentColor', // Change text color of the option wrapper
        zIndex: 9999,
    }),
    input: (provided: any, state: any) => ({
        ...provided,
        color: 'currentColor', // Change the color of the input text
    }),
    // make mutil value is center of container

    multiValue: (provided: any) => ({
        ...provided,
        color: 'currentColor',
        height: '32px',
        backgroundColor: 'rgba(145, 145, 145, 0.5)',
    }),
    multiValueLabel: (provided: any) => ({
        ...provided,
        color: 'currentColor',
    }),
};
interface OptionType {
    value: any;
    label: string;
}
//function compare array id with dependent task id
const compareArray = (array1: MultiValue<OptionType>, array2: Array<string>) => {
    return array1.length === array2.length
        ? array1.every((val, index) => array2.find((value) => value === val.value))
        : false;
};
const modifyTasksToOptions = function (tasks: any[] | undefined): Array<OptionType> {
    if (!tasks) {
        return [];
    }

    return tasks.map((val) => ({ value: `${val.type}-${val._id}`, label: `${val.title}#${val.type}-${val._id}` })); // Replace this with your actual return statement
};
function DependentTasks({ project_id, dependent }: { project_id: number | null; dependent: Array<string> | null }) {
    const [onEdit, setOnEdit] = useState(false);
    const [defaultValue, setDefaultValue] = useState<string[] | null>(dependent);
    const [value, setValue] = useState<MultiValue<OptionType>>([]);
    const [onSubmit, setOnSubmit] = useState(false);
    const selectRef = useRef<SelectInstance<OptionType, true, GroupBase<OptionType>>>(null);
    const { dependentTasks, isLoading, isError } = useDependentTasksFetcher(
        defaultValue,
        defaultValue && defaultValue.length > 0 ? true : false,
    );

    const {
        tasks,
        isLoading: isTasksLoading,
        isError: isTasksError,
    } = useUserTasksFetcher(project_id ? true : false, project_id ? { project_id: project_id } : undefined);

    useEffect(() => {
        const el3 = selectRef.current;
        if (el3 && onEdit) {
            el3.focus();
        }
    }, [onEdit]);
    return (
        <>
            <span className="my-[8px] block">Dependence</span>
            <div className="flex bg-cooler items-center rounded px-2 my relative ">
                <Select
                    value={value.length < 0 && dependentTasks ? modifyTasksToOptions(dependentTasks) : value}
                    ref={selectRef}
                    isMulti // Fix: Change isMulti value to false
                    classNamePrefix={`task-detail-data_input-select-dependent`}
                    styles={selectStyle}
                    placeholder={'value as string'}
                    options={modifyTasksToOptions(tasks)}
                    onChange={(data) => {
                        setValue(data);
                    }}
                    onBlur={() => {
                        setOnEdit(false);
                        setOnSubmit(true);
                    }}
                    name={'dependent'}
                    className={classNames(
                        'translate-x-[-10px] pl-2 w-full bg-cooler outline-none min-h-[40px] text-lg rounded my-px',
                    )}
                    openMenuOnFocus={true}
                    isDisabled={!onEdit}
                    onKeyDown={(event) => {
                        if (event.key === 'Enter') {
                            (event.target as HTMLInputElement).blur();
                        }
                    }}
                />
                {!onEdit && (
                    <span
                        onClick={(ev) => {
                            setOnEdit(true);
                        }}
                        className="w-[26px] h-[26px] pl-[4px] cursor-pointer rounded pt-[4px] hover:bg-[rgba(123,123,123,0.5)]"
                    >
                        <EditIcon className="w-[18px] h-[18px]" />
                    </span>
                )}
            </div>
            {onSubmit && defaultValue && !compareArray(value, defaultValue) && (
                <OverlayWrapper>
                    <div className="top-[50%] translate-y-[-50%] relative z-[20] mx-auto w-[280px] h-[110px] bg-cooler rounded ">
                        <div className="w-full h-[70px] p-2 flex items-center">
                            {' '}
                            <span>do you want to save changes?</span>
                        </div>
                        <div className="w-full h-[40px] border-t border-weak flex">
                            <div
                                onClick={() => {
                                    setOnSubmit(false);
                                    if (defaultValue && !compareArray(value, defaultValue)) {
                                        setValue(defaultValue ? modifyTasksToOptions(dependentTasks) : []);
                                    }
                                }}
                                className="w-1/2 text-center leading-[40px] cursor-pointer"
                            >
                                Cancel
                            </div>
                            <div
                                onClick={() => {
                                    setOnSubmit(false);

                                    if (defaultValue && !compareArray(value, defaultValue)) {
                                        setDefaultValue(value.map((val) => val.value));
                                    }
                                }}
                                className="w-1/2 text-center leading-[40px] cursor-pointer border-l border-weak"
                            >
                                Ok
                            </div>
                        </div>
                    </div>
                </OverlayWrapper>
            )}
        </>
    );
}

export default DependentTasks;
