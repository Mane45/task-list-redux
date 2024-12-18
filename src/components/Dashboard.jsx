import { AddTask } from "./addTask"
import { Stats } from "./Stats"
import { TaskList } from "./taskList"

export const Dashboard = () => {
    return <div className="board">
        <div className="row">
            <AddTask /> 
        </div>
        <Stats />
        <TaskList />
    </div>
}