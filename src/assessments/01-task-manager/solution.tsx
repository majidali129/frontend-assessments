import { AddTaskForm } from "@/components/task-manager/add-task-form"
import { TaskMangerFilters } from "@/components/task-manager/filters"
import { TaskManagerHeader } from "@/components/task-manager/header"
import { TaskManagerStats } from "@/components/task-manager/stats"
import { TaskList } from "@/components/task-manager/task-list"
import { useEffect, useState } from "react"
import type { Filter, Task, TaskStatus } from "./types"
import { taskList } from "@/components/task-manager/data"
import { TaskManagerSearch } from "@/components/task-manager/search"
import { TaskManagerFilterTabs } from "@/components/task-manager/filter-tabs"
import { getDataFromStorage, saveToStorage } from "@/utils"



export const TaskManger = () => {
    // ======================= Initialize tasks from local storage or use an empty array if no data is found ============
    const [tasks, setTasks] = useState<Task[]>(() => {
        const data = getDataFromStorage('tasks');
       return  data ? JSON.parse(data): []
    });
    const [query, setQuery] = useState('');
    const [filter, setFilter] = useState<Filter | null>('all') 
    
    // ================= Event handlers =================
    
    const handleCreateTask = (newTask: Task) => {
        setTasks(prevTasks => [newTask, ...prevTasks])
        saveToStorage('tasks', [newTask, ...tasks])
    }

    const handleDeleteTask = (targetId: string) => {
        setTasks(prevTasks => prevTasks.filter(task => task.id !== targetId));
        const updatedData = tasks.filter(task => task.id !== targetId);
        setTasks(updatedData);
        saveToStorage('tasks', updatedData)
    }

    const handleToggleStatus = (targetId: string, status: TaskStatus) => {
        const updatedTasks = tasks.map(task => task.id === targetId? ({...task, status}): task)
        setTasks(updatedTasks)
        saveToStorage('tasks', updatedTasks)
    }

    const handleQueryChange = (query: string) => {
        setQuery(query)
    }

    const handleFilterChange = (filter: Filter) => {
        setFilter(filter)
    }

//  ================================= Filtering and searching tasks based on the current filter and search query =================

    let filteredTasks = filter === 'active' ? tasks.filter(t => t.status === 'in-progress') : filter === 'completed' ? tasks.filter(t => t.status === 'done') : tasks;

    filteredTasks = filteredTasks.filter(task => task.title.trim().toLocaleLowerCase().includes(query.trim().toLocaleLowerCase()))


    const stats = {
        total: tasks.length,
        completed: tasks.filter(t => t.status === 'done').length,
        pending: tasks.filter(t => t.status === 'todo').length
    }

    // ======================= Persist tasks to local storage as Component Mounts Very First Time =========================

    useEffect(() => {
        saveToStorage('tasks', taskList)
    }, [])

    return (
        <section className="flex justify-center flex-col max-w-7xl mx-auto gap-8 p-10 shadow-lg">
            <TaskManagerHeader />
            <TaskManagerStats stats={{...stats}} />
            <TaskMangerFilters>
                <div className="flex items-center justify-between gap-5 shrink-0">
            <TaskManagerSearch query={query} onQueryChange={handleQueryChange} />
            <TaskManagerFilterTabs onFilterChange={handleFilterChange} />
        </div>
            </TaskMangerFilters>
            <AddTaskForm onAddNewTask={handleCreateTask} />
            <TaskList tasks={filteredTasks} deleteTask={handleDeleteTask} toggleStatus={handleToggleStatus} />
        </section>
    )
}