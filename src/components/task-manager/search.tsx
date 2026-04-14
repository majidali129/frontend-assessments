import type { ChangeEvent } from "react";
import { Input } from "../ui/input"


type TaskManagerSearchProps = {
    query: string;
    onQueryChange: (query: string) => void;
}

export const TaskManagerSearch = ({query, onQueryChange}: TaskManagerSearchProps) => {

    return (
        <div className="w-full">
            <Input value={query} onChange={(e: ChangeEvent<HTMLInputElement>) => onQueryChange(e.target.value)} type="text" className="h-auto py-2.5 text-lg!" placeholder="Search tasks..." />
        </div>
    )
}