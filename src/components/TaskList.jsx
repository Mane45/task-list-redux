import { useSelector } from "react-redux"


export const TaskList = () => {
    const list = useSelector(state => state.tasks)
    console.log(list)
    return <div className="list">
        {
            list.map(task => 
            <div key={task.id}>
                <p>{task.text}</p>
                <p>{task.status}</p>
            </div>
            )
        }
    </div>
}