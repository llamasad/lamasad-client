import { Select } from 'antd';
import { EditIcon } from '@/components/icons';
import useDependentTasks from '@/hooks/use-dependent-tasks-fetcher';
function DependentTasks({ project_id,dependent }: { project_id: string | null,dependent: Array<string> | null}) {
    const handleChange = (value: any) => {};
    useDependentTasks(dependent, dependent&&dependent.length > 0?true:false);
    return (
        <div className="w-full">
            <Select
                mode="multiple"
                size={'middle'}
                placeholder={project_id ? 'Please select' : 'choose project first'}
                defaultValue={['a10', 'c12']}
                onChange={handleChange}
                className="w-full"
                options={[
                    { label: 'a10', value: 'a10' },
                    { label: 'c12', value: 'c12' },
                ]}
            />
            <EditIcon className="w-6 h-6" />
        </div>
    );
}

export default DependentTasks;
