'use client';

import { Dispatch, Reducer, SetStateAction, useState } from 'react';

function ActivityItemSwitchMode({
    editModeState,
    accessPermission,
}: {
    editModeState: [boolean, Dispatch<SetStateAction<boolean>>];
    accessPermission: boolean;
}) {
    const [editMode, setEditMode] = editModeState;
    const [onToast, setOnToast] = useState(false);
    return (
        <>
            <div className="absolute w-[100px]  border border-weak rounded-full h-[30px] top-[6px] right-0">
                <input
                    type="radio"
                    className="peer/view"
                    id="ActivityItemMode1"
                    name="mode"
                    hidden
                    value={'view'}
                    checked={!editMode}
                />
                <label
                    onClick={() => {
                        setEditMode(false);
                    }}
                    htmlFor="ActivityItemMode1"
                    className="absolute h-full w-1/2 z-10 cursor-pointer"
                ></label>
                <input
                    type="radio"
                    className="peer/edit"
                    id="ActivityItemMode2"
                    name="mode"
                    hidden
                    value={'edit'}
                    checked={editMode}
                />
                <label
                    onClick={() => {
                        setOnToast(true);
                    }}
                    htmlFor="ActivityItemMode2"
                    className="absolute w-1/2 h-full z-10 cursor-pointer right-0"
                ></label>
                <div className="before:content-['view'] before:text-tl text-center w-[54px] h-full rounded-full bg-green-500 transition-transform peer-checked/edit:before:content-['edit'] peer-checked/edit:translate-x-[46px] relative"></div>
            </div>
            {onToast && (
                <div className="absolute inset-0  z-20">
                    {accessPermission &&
                        (!editMode ? (
                            <div className="rounded-lg top-52 mx-auto relative z-10 w-[240px] bg-[rgb(var(--background-start-rgb))]  border border-weak">
                                <div className="h-[59px] w-full border-b border-weak flex items-center text-center">
                                    Do you want change view to edit??
                                </div>
                                <div className="h-[32px] flex">
                                    <div
                                        className="w-1/2 cursor-pointer border-r text-center border-weak"
                                        onClick={() => {
                                            setEditMode(true);
                                            setOnToast(false);
                                        }}
                                    >
                                        Oke
                                    </div>
                                    <div
                                        className="w-1/2 cursor-pointer text-center"
                                        onClick={() => {
                                            setEditMode(false);
                                            setOnToast(false);
                                        }}
                                    >
                                        Cancel
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="rounded-lg top-52 mx-auto relative z-10 w-[240px] bg-[rgb(var(--background-start-rgb))]  border border-weak">
                                <div className="h-[59px] w-full border-b border-weak flex items-center text-center">
                                    Do you want change save the change?
                                </div>
                                <div className="h-[32px] flex">
                                    <div
                                        className="cursor-pointer w-1/2 border-r text-center border-weak"
                                        onClick={() => {
                                            setEditMode(true);
                                            setOnToast(false);
                                        }}
                                    >
                                        Oke
                                    </div>
                                    <div
                                        className="cursor-pointer w-1/2 text-center"
                                        onClick={() => {
                                            setEditMode(false);
                                            setOnToast(false);
                                        }}
                                    >
                                        Cancel
                                    </div>
                                </div>
                            </div>
                        ))}
                    {!accessPermission && (
                        <div className="rounded-lg top-52 mx-auto relative z-10 w-[240px] bg-[rgb(var(--background-start-rgb))]  border border-weak">
                            <div className="h-[59px] w-full border-b border-weak flex items-center text-center">
                                You have not access permission to edit mode
                            </div>
                            <div className="h-[32px] flex">
                                <div
                                    className="w-full cursor-pointer text-center"
                                    onClick={() => {
                                        setOnToast(false);
                                    }}
                                >
                                    Cancel
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </>
    );
}

export default ActivityItemSwitchMode;
