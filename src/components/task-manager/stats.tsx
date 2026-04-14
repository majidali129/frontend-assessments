import { Card, CardContent, CardTitle } from "../ui/card"


type StatsCardProps = {
    label: string;
    value: number
}

const StatsCard = ({ label, value }: StatsCardProps) => {
    return (
        <Card className="flex items-center justify-center rounded">
            <CardContent className="text-body font-semibold opacity-80">{label}</CardContent>
            <CardTitle >
                <h2>
                    {value}
                </h2>
            </CardTitle>
        </Card>
    )
}

type TaskManagerStatsProps = {
    stats: {total: number;
    completed: number;
    pending: number}
}

export const TaskManagerStats = ({stats: {total,completed, pending}}: TaskManagerStatsProps) => {
    const statsData = [
        { label: "Total Tasks", value: total },
        { label: "Completed Tasks", value: completed },
        { label: "Pending Tasks", value: pending },
    ]
    return (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 md:gap-4">
            {
                statsData.map((stat) => (
                    <li key={stat.label}>
                        <StatsCard label={stat.label} value={stat.value} />
                    </li>
                ))
            }
        </ul>
    )
}