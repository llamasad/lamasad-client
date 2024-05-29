import { ArrowIcon, PlusIcon } from '@/components/icons';

function AddActitvity() {
    return (
        <div className="px-[10px] rounded mb-[10px] py-[8px] border border-current flex bg-weak   items-center justify-center">
            <span className="text-lg mr-[10px]">Add activity</span>
            <ArrowIcon className="rotate-[-90deg] w-[16px] h-[16px] text-tl" />
        </div>
    );
}

export default AddActitvity;
