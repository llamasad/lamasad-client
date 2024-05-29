import { useState } from 'react';
import PercentBar from './percent-bar';
import ActivityFormField from './activity-form-field';
import ActivityFormFileInputList from './activity-form-file-input-list';
import ActivityChat from './activity-chat';
import ActivityItemSwitchMode from './activity-item-switch-mode';
import ActivityHistory from './Activity-history';

function ActivityItemForm() {
    const [onEditMode, setOnEditMode] = useState<boolean>(false);
    return (
        <>
            <ActivityItemSwitchMode accessPermission={true} editModeState={[onEditMode, setOnEditMode]} />
            <div className="space-y-[10px] flex flex-col h-full mt-[10px]">
                <ActivityFormField
                    name={'title'}
                    type={'text'}
                    fieldValue="activity-1"
                    onEditMode={onEditMode}
                    tilte={'title'}
                />
                <ActivityFormField
                    fieldValue="sssssssssssssssssssssssssssssssssssssssssssssssssssssddddddddddddddsssssssssssssssssssssssssssss"
                    name={'title'}
                    type={'textarea'}
                    onEditMode={onEditMode}
                    tilte={'request'}
                />
                <PercentBar onEditMode={onEditMode} />
                <ActivityFormFileInputList onEditMode={onEditMode} />
                <ActivityHistory />
                <ActivityChat />
            </div>
        </>
    );
}

export default ActivityItemForm;
