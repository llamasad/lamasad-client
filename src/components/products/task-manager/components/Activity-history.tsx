import ActivityHistoryList from './activity-history-list';

function ActivityHistory() {
    return (
        <div className="w-full ">
            <h2 className="text-tl text-lg">Activity History</h2>
            <ActivityHistoryList
                historiesList={[
                    { entity: 'hello,you', historyAction: 'i hello you', timeRelease: '12:24 2/12/2003' },
                    { entity: 'hello,you', historyAction: 'i hello you', timeRelease: '12:24 2/12/2003' },
                    { entity: 'hello,you', historyAction: 'i hello you', timeRelease: '12:24 2/12/2003' },
                    { entity: 'hello,you', historyAction: 'i hello you', timeRelease: '12:24 2/12/2003' },
                    { entity: 'hello,you', historyAction: 'i hello you', timeRelease: '12:24 2/12/2003' },
                    { entity: 'hello,you', historyAction: 'i hello you', timeRelease: '12:24 2/12/2003' },
                    { entity: 'hello,you', historyAction: 'i hello you', timeRelease: '12:24 2/12/2003' },
                    { entity: 'hello,you', historyAction: 'i hello you', timeRelease: '12:24 2/12/2003' },
                ]}
            />
        </div>
    );
}

export default ActivityHistory;
