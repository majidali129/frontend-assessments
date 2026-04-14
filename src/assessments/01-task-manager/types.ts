
export type TaskStatus = 'todo' | 'expired' | 'done' | 'in-progress'
export type Filter = 'all' | 'active' | 'completed'

export type Task = {
    id: string;
    title: string;
    status: TaskStatus;
}