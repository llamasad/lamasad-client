import ActivityFormFileInput from './activity-form-file-input';
import ActivityFormFileInputCreate from './activity-form-file-input-create';

function ActivityFormFileInputList({ onEditMode }: { onEditMode: boolean }) {
    return (
        <div>
            {' '}
            <h2 className="text-lg text-tl mb-[10px]">{'attach file (docx,pdf,png)'}</h2>
            <div className="w-full space-x-2.5 flex overflow-x-auto">
                <ActivityFormFileInput
                    onEditMode={onEditMode}
                    title="da122222222222222222222222222222t do"
                    fileSize="123kb"
                    typeOfInput="docx"
                />
                <ActivityFormFileInput
                    onEditMode={onEditMode}
                    title="da122222222222222222222222222222t do"
                    fileSize="123kb"
                    typeOfInput="docx"
                />
                <ActivityFormFileInput
                    onEditMode={onEditMode}
                    title="da122222222222222222222222222222t do"
                    fileSize="123kb"
                    typeOfInput="docx"
                />
                {onEditMode && <ActivityFormFileInputCreate />}
            </div>
        </div>
    );
}

export default ActivityFormFileInputList;
