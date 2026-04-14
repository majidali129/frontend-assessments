import type { ReactNode } from "react"
import { TaskManagerFilterTabs } from "./filter-tabs"
import { TaskManagerSearch } from "./search"


type TaskMangerFiltersProps = {
    children: ReactNode
}

export const TaskMangerFilters = ({children}: TaskMangerFiltersProps) => {
    return (
        <>
            {
                children
        }
        </>
    )
}