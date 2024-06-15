import { PlusIcon } from '@/components/icons';
import { useState } from 'react';
const formatFileSize = (size: number) => {
    const units = ['bytes', 'KB', 'MB', 'GB', 'TB'];
    let unitIndex = 0;
    let fileSize = size;

    while (fileSize >= 1024 && unitIndex < units.length - 1) {
        fileSize /= 1024;
        unitIndex += 1;
    }

    return `${fileSize.toFixed(2)} ${units[unitIndex]}`;
};
function ActivityFormFileInputCreate({ handleAddFile }: { handleAddFile: Function }) {
    const [count, setCount] = useState(0);

    const handleFileChange = (event: any) => {
        const file = event.target.files[0]; // Get the first file selected
        if (file) {
            setCount(count + 1);

            handleAddFile({
                _id: count,
                type:
                    (file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' &&
                        'docx') ||
                    (file.type === 'application/msword' && 'docx') ||
                    (file.type === 'application/pdf' && 'pdf'),
                name: file.name,
                weight: formatFileSize(file.size),
                file: file,
            });
        }
    };
    return (
        <div>
            <input
                onChange={handleFileChange}
                accept=".pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                hidden
                type="file"
                id="input-file-for-file"
            />
            <label
                htmlFor="input-file-for-file"
                className="w-[160px] cursor-pointer shrink-0 h-[112px] border border-weak rounded-lg border-dashed flex justify-center items-center"
            >
                <PlusIcon className="w-[32px] h-[32px]" />
            </label>
        </div>
    );
}

export default ActivityFormFileInputCreate;
