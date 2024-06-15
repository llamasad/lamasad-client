import { Dispatch, RefAttributes, SetStateAction, useCallback, useRef, useState } from 'react';
import PercentBar from './percent-bar';
import ActivityFormField from './activity-form-field';
import ActivityFormFileInputList from './activity-form-file-input-list';
import ActivityChat from './activity-chat';
import ActivityItemSwitchMode from './activity-item-switch-mode';
import ActivityHistory from './Activity-history';
import { InputRef } from 'antd';
import axios from 'axios';
import apiFecther from '@/service/task-manger-fetcher/api-fetcher';
import { mutate } from 'swr';
function ActivityItemForm({
    _id,
    title,
    request,
    files,
    history_id,
    chat_id,
    status,
    setTrigger,
    limits,
}: {
    _id: number;
    status: 'complete' | 'incomplete' | 'ceased';
    title: string;
    request: string;
    files?: number[] | null;
    history_id: number;
    chat_id: number;
    limits: string;
    setTrigger: Dispatch<SetStateAction<boolean>>;
}) {
    const [onEditMode, setOnEditMode] = useState<boolean>(false);
    const titleRef = useRef<any>(null);
    const requestRef = useRef<any>(null);
    const filesAttachRef = useRef<any>(null);
    const percentRef = useRef<HTMLInputElement>(null);
    const checkInputChange = useCallback(() => {
        if (
            titleRef.current.input.value !== title ||
            requestRef.current?.resizableTextArea.textArea.value !== request ||
            percentRef.current?.value !== limits ||
            filesAttachRef.current?.addFile.length > 0 ||
            filesAttachRef.current?.removeFile.length > 0
        ) {
            return true;
        }
        return false;
    }, [title, request, limits, filesAttachRef]);

    const resetState = useCallback(() => {
        filesAttachRef.current.setAddFile([]);
        filesAttachRef.current.setRemoveFile([]);
        requestRef.current.resizableTextArea.textArea.value = request;
        titleRef.current.input.value = title;
    }, [request, title]);
    const saveChange = useCallback(async () => {
        const title = titleRef.current.input.value;
        const request = requestRef.current.resizableTextArea.textArea.value;
        const limits = percentRef.current?.value;
        const addFile = filesAttachRef.current.addFile as Array<any>;
        const removeFile = filesAttachRef.current.removeFile;
        const formData = new FormData();
        if (title && request && limits) {
            formData.append('title', title);
            formData.append('request', request);
            formData.append('limits', limits);

            for (let i = 0; i < addFile.length; i++) {
                formData.append('addFile', addFile[i].file);
            }
            addFile.forEach((file) => {
                delete file.file;
                delete file._id;
            });
            formData.append('files', JSON.stringify(addFile));

            formData.append('removeFile', JSON.stringify(removeFile));
            try {
                await apiFecther('/api/activity/' + _id, 'PUT', formData, 'multipart/form-data');
                setOnEditMode(false);
                resetState();
                setTrigger((prev) => !prev);
                mutate(process.env.NEXT_PUBLIC_SERVER_SIDE_URL + '/api/file-attach/' + _id);
            } catch (error) {}
        }
    }, [titleRef, requestRef, percentRef, filesAttachRef, _id, resetState, setTrigger]);

    return (
        <>
            <ActivityItemSwitchMode
                resetState={resetState}
                checkInputChange={checkInputChange}
                accessPermission={true}
                saveChange={saveChange}
                editModeState={[onEditMode, setOnEditMode]}
            />
            <div className="space-y-[10px] flex flex-col h-full mt-[10px]">
                <ActivityFormField
                    ref={titleRef}
                    name={'title'}
                    type={'text'}
                    fieldValue={title}
                    onEditMode={onEditMode}
                    tilte={'title'}
                />
                <ActivityFormField
                    ref={requestRef}
                    fieldValue={request}
                    name={'request'}
                    type={'textarea'}
                    onEditMode={onEditMode}
                    tilte={'request'}
                />
                <h2 className="my-2 text-lg mb-2.5 text-tl">limits</h2>
                <PercentBar ref={percentRef} onEditMode={onEditMode} initState={Number(limits.split('%')[0])} />
                <ActivityFormFileInputList ref={filesAttachRef} _id={_id} onEditMode={onEditMode} />
                <ActivityHistory history_id={history_id} />
                <ActivityChat chat_id={chat_id} />
            </div>
        </>
    );
}

export default ActivityItemForm;
