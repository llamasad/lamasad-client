'use client'
import GeneralHistoryList from './general-history-list';

function GeneralHistory({history_id}:{history_id:number}) {
    return (
        <div>
            <h2 className="text-lg ">General history</h2>
            <GeneralHistoryList
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

export default GeneralHistory;
