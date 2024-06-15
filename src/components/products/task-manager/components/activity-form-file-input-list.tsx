import { ForwardedRef, forwardRef, useImperativeHandle, useState } from 'react';
import ActivityFormFileInput from './activity-form-file-input';
import ActivityFormFileInputCreate from './activity-form-file-input-create';
import useFileAttachFetcher from '@/hooks/use-file-attach-fetcher';

const ActivityFormFileInputList = forwardRef(function A(
    { onEditMode, _id }: { onEditMode: boolean; _id: number },
    ref: ForwardedRef<any>,
) {
    const { filesAttach, isLoading, isError } = useFileAttachFetcher(_id, true);
    const [removeFile, setRemoveFile] = useState<number[]>([]);
    const [addFile, setAddFile] = useState<any[]>([]);
    const handleRemoveFile = (isInstanceFile: boolean, id?: number) => {
        if (!isInstanceFile && id !== undefined) {
            setRemoveFile([...removeFile, id]);
        } else if (isInstanceFile && id !== undefined) {
            setAddFile(addFile.filter((el: any) => el._id !== id));
        }
    };
    useImperativeHandle(
        ref,
        () => ({
            removeFile,
            setRemoveFile,
            addFile,
            setAddFile,
        }),
        [removeFile, addFile],
    );
    const handleAddFile = (file: any) => {
        setAddFile([...addFile, file]);
    };

    return (
        <div>
            <h2 className="text-lg text-tl mb-[10px]">{'attach file (docx,pdf,png)'}</h2>
            <div className="w-full space-x-2.5 flex overflow-x-auto">
                {filesAttach &&
                    (filesAttach as Array<any>)
                        .filter((el) => {
                            return removeFile.indexOf(el._id) === -1;
                        })
                        .map((el: any, id: any) => {
                            return (
                                <ActivityFormFileInput
                                    key={id}
                                    src={el.src}
                                    onEditMode={onEditMode}
                                    title={el.name.split('/|\\')[0]}
                                    fileSize={el.weight}
                                    typeOfInput={el.type}
                                    handleRemoveFile={() => handleRemoveFile(false, el._id)}
                                />
                            );
                        })}
                {addFile.map((el: any, id) => {
                    return (
                        <ActivityFormFileInput
                            key={id}
                            onEditMode={onEditMode}
                            title={el.name}
                            fileSize={el.weight}
                            typeOfInput={el.type}
                            handleRemoveFile={() => handleRemoveFile(true, el._id)}
                        />
                    );
                })}
                {onEditMode && <ActivityFormFileInputCreate handleAddFile={handleAddFile} />}
            </div>
        </div>
    );
});

export default ActivityFormFileInputList;
