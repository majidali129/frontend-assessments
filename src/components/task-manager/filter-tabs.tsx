import type { Filter } from "@/assessments/01-task-manager/types";
import { Button } from "../ui/button"


type TaskManagerFilterTabsProps = {
    onFilterChange: (label: Filter) => void;
}


export const TaskManagerFilterTabs = ({onFilterChange}: TaskManagerFilterTabsProps) => {
    return (
        <div className="flex gap-2 items-center *:text-lg *:h-auto *:py-2.5 *:px-4">
            <Button onClick={() => onFilterChange('all')} variant="outline" >All</Button>
            <Button onClick={() => onFilterChange('active')} variant="outline" >Active</Button>
            <Button onClick={() => onFilterChange('completed')} variant="outline" >Completed</Button>
        </div>
    )
}