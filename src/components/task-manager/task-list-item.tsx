import { CheckIcon, Trash2, X } from "lucide-react"
import { Badge } from "../ui/badge"
import { Button } from "../ui/button"
import type { Task, TaskStatus } from "@/assessments/01-task-manager/types"
import { cn } from "@/lib/utils"


type TaskListItemProps = {
    task: Task;
    deleteTask: (id: string) => void;
    toggleStatus: (id: string, status: TaskStatus) => void;
}

export const TaskListItem = ({ task: {id, status, title }, deleteTask, toggleStatus }: TaskListItemProps) => {
    const isDone = status === 'done';
    const badgeStyle = status === 'done'? 'bg-green-100 text-green-700': status === 'expired'? 'bg-red-200 text-red-800': status === 'in-progress'? 'bg-blue-100 text-blue-800':  'bg-transparent'
    const newStatus = isDone ? 'todo' : 'done' as TaskStatus;
    
    return (
        <div className="flex items-center justify-between">
            <h3 className={`opacity-90 px-8 font-medium tracking-wide ${isDone? 'line-through opacity-70!': ''}`}>{title}</h3>
            <div className="flex items-center gap-2.5">
                <Badge variant="outline" className={cn("text-sm px-4", badgeStyle)}>{status}</Badge>
                <Button onClick={() => toggleStatus(id, newStatus)} variant="secondary" asChild size="icon" className="p-1" >
                   {!isDone?  <CheckIcon className="text-green-500!" />: <X className="text-primary" /> }
                </Button>

                <Button onClick={() => deleteTask(id)} variant="secondary" asChild size="icon" className="p-1" >
                    <Trash2 className="text-red-400!" />
                </Button>
            </div>
        </div>
    )
}