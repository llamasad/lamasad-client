'use client';

import { EditIcon } from '@/components/icons';
import { useEffect, useRef, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Select from 'react-select';
import OverlayWrapper from '../wrappers/overlay-wrapper';
import classNames from 'classnames';

const selectStyle = {
    control: (baseStyles: any, state: any) => ({
        ...baseStyles,
        borderColor: 'transparent', // Set border color to transparent
        '&:hover': {
            borderColor: 'transparent', // Ensure border color remains transparent on hover
        },
        outline: 'none',
        boxShadow: 'none',
        height: '38px',
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
        color: 'currentcolor', // Change the color of the input text
    }),
};
interface OptionType {
    value: string;
    label: string;
}
function stringToDate(para: string) {
    const [day, month, year] = para.split('/');
    return new Date(Number(year), Number(month) - 1, Number(day));
}
function dateToString(date: Date) {
    const day = ('0' + date.getDate()).slice(-2); // Get the day and pad with leading zero if needed
    const month = ('0' + (date.getMonth() + 1)).slice(-2); // Get the month (Note: Month is zero-based, so add 1) and pad with leading zero if needed
    const year = date.getFullYear(); // Get the year

    return `${day}/${month}/${year}`;
}
function TaskDetailDataField({
    title,
    type,
    name,
    valueOfDetail,
    className,
}: {
    title?: string;
    type: 'text' | 'date' | 'textarea' | 'select';
    name: string;
    valueOfDetail: string;
    className?: string;
}) {
    const [value, setValue] = useState(() => {
        if (type !== 'date') {
            return valueOfDetail;
        } else {
            return stringToDate(valueOfDetail as string);
        }
    });
    const selectRef = useRef(null);
    const [onSubmit, setOnSubmit] = useState(false);
    const [onEdit, setOnEdit] = useState(false);
    const inputRef = useRef<HTMLInputElement | null>(null);
    useEffect(() => {
        switch (type) {
            case 'date':
                const el =
                    onEdit &&
                    (document.querySelector(`input[name="${name}"].task-detail-data_input-date`) as HTMLInputElement);
                if (el && onEdit) {
                    el.focus();
                }
                break;
            case 'text':
                const el1 =
                    onEdit &&
                    (document.querySelector(`input[name="${name}"].task-detail-data_input`) as HTMLInputElement);
                console.log(document.querySelector('.task-detail-data_input') as HTMLInputElement);
                if (el1 && onEdit) {
                    el1.focus();
                }
                break;
            case 'textarea':
                const el2 =
                    onEdit &&
                    (document.querySelector(`textarea[name="${name}"].task-detail-data_textarea`) as HTMLInputElement);
                if (el2 && onEdit) {
                    el2.focus();
                }
                break;
            case 'select':
                const el3 =
                    onEdit && (document.querySelector(`.task-detail-data_input-select-${name}__input`) as HTMLElement);
                console.log(selectRef.current);
                if (el3 && onEdit) {
                    el3.focus();
                }
            default:
                break;
        }
    }, [onEdit]);
    const inputType = {
        text: (
            <input
                onChange={(ev) => {
                    setValue(ev.target.value);
                }}
                onBlur={() => {
                    setOnEdit(false);
                    setOnSubmit(value !== valueOfDetail);
                }}
                type={type}
                name={name}
                className="task-detail-data_input w-full bg-cooler outline-none h-[40px] text-lg rounded"
                disabled={!onEdit}
                value={value as string}
                onKeyDown={(event) => {
                    if (event.key === 'Enter') {
                        event.currentTarget.blur();
                    }
                }}
            />
        ),
        date: (
            <div className="w-full">
                <DatePicker
                    ref={(node: any) => {
                        if (node) {
                            const inputELe = node.input;
                            // Accessing the input element using the ref
                            if (inputELe) {
                                inputRef.current = inputELe as HTMLInputElement;
                            }
                        }
                    }}
                    onBlur={() => {
                        setOnEdit(false);
                        if (value instanceof Date && value) {
                            const timeObject = value as Date;
                            const formattedDate = timeObject
                                ? `${('0' + timeObject.getDate()).slice(-2)}/${(
                                      '0' +
                                      (timeObject.getMonth() + 1)
                                  ).slice(-2)}/${timeObject.getFullYear()}`
                                : '';
                            setOnSubmit(formattedDate !== valueOfDetail);
                        }
                    }}
                    name={name}
                    selected={value as Date}
                    className="task-detail-data_input-date bg-cooler outline-none h-[40px] text-lg rounded"
                    onChange={(date: Date) => {
                        setValue(date);
                    }}
                    disabled={!onEdit}
                    onKeyDown={(event) => {
                        if (event.key === 'Enter') {
                            setOnEdit(false);
                            if (value instanceof Date && value) {
                                const timeObject = value as Date;
                                const formattedDate = timeObject
                                    ? `${('0' + timeObject.getDate()).slice(-2)}/${(
                                          '0' +
                                          (timeObject.getMonth() + 1)
                                      ).slice(-2)}/${timeObject.getFullYear()}`
                                    : '';
                                setOnSubmit(formattedDate !== valueOfDetail);
                            }
                        }
                    }}
                    dateFormat={'dd/MM/yyyy'}
                />
            </div>
        ),
        textarea: (
            <>
                <textarea
                    onChange={(ev) => {
                        console.log(ev.target.value);
                        setValue(ev.target.value);
                    }}
                    onBlur={() => {
                        setOnEdit(false);
                    }}
                    disabled={!onEdit}
                    name={name}
                    cols={30}
                    rows={10}
                    className={
                        ' task-detail-data_textarea w-full bg-cooler outline-none  text-lg rounded resize-none h-[120px] p-[4px]'
                    }
                    onKeyDown={(event) => {
                        if (event.key === 'Enter') {
                            event.currentTarget.blur();
                        }
                    }}
                >
                    {value as string}
                </textarea>
            </>
        ),
        select: (
            <>
                <Select<OptionType>
                    ref={selectRef}
                    classNamePrefix={`task-detail-data_input-select-${name}`}
                    styles={selectStyle}
                    placeholder={value as string}
                    options={[
                        { value: 'Todo', label: 'Todo' },
                        { value: 'yetToStart', label: 'Yet to start' },
                        { value: 'inProgress', label: 'In progress' },
                        { value: 'onHold', label: 'On hold' },
                        { value: 'completed', label: 'Completed' },
                    ]}
                    onChange={(data) => {
                        setValue(data?.value as string);
                        console.log(data?.value);
                    }}
                    onBlur={() => {
                        setOnEdit(false);
                        setOnSubmit(true);
                    }}
                    name={name}
                    className={classNames(
                        ' translate-x-[-10px] w-full bg-cooler outline-none h-[40px] text-lg rounded',
                        `task-detail-data_input-select-${name}`,
                    )}
                    openMenuOnFocus={true}
                    isDisabled={!onEdit}
                    onKeyDown={(event) => {
                        if (event.key === 'Enter') {
                            (event.target as HTMLInputElement).blur();
                        }
                    }}
                />
                <input
                    type="hidden"
                    name="status"
                    value={value as string} // You may need to change this value based on your logic
                />
            </>
        ),
    };

    return (
        <div className="w-full">
            <span className="my-[8px] block">{title}</span>
            <div className={classNames('flex bg-cooler items-center rounded px-2 relative', className)}>
                {inputType[type]}
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
            {value !== valueOfDetail && onSubmit && (
                <OverlayWrapper>
                    <div className="top-[50%] translate-y-[-50%] relative z-[20] mx-auto w-[280px] h-[110px] bg-cooler rounded ">
                        <div className="w-full h-[70px] p-2 flex items-center">
                            {' '}
                            <span>
                                do you want change form{valueOfDetail}to{' '}
                                {value instanceof Date ? dateToString(value) : value}
                            </span>
                        </div>
                        <div className="w-full h-[40px] border-t border-weak flex">
                            <div
                                onClick={() => {
                                    if (type !== 'date') {
                                        setOnSubmit(false);
                                        setValue(valueOfDetail);
                                    } else {
                                        setOnSubmit(false);
                                        setValue(stringToDate(valueOfDetail));
                                    }
                                }}
                                className="w-1/2 text-center leading-[40px] cursor-pointer"
                            >
                                Cancel
                            </div>
                            <div className="w-1/2 text-center leading-[40px] cursor-pointer border-l border-weak">
                                Ok
                            </div>
                        </div>
                    </div>
                </OverlayWrapper>
            )}
        </div>
    );
}

export default TaskDetailDataField;
