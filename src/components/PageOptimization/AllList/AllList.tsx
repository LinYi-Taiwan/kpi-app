import './style/AllList.css';
import { Dispatch, SetStateAction } from 'react';

type TaskInner = {
    $t: string;
};

type Task = {
    gsx$pagename: TaskInner;
    gsx$efficiency: TaskInner;
    gsx$createtime: TaskInner;
};

type Props = {
    allTasks: Array<Task>;
    setTargetTask?: Dispatch<SetStateAction<Array<any>>>;
};

const AllList = ({ allTasks, setTargetTask }: Props) => {
    return (
        <div className="list-box">
            {allTasks.map((task, index) => (
                <div
                    className="list"
                    // onClick={() => {
                    //     setTargetTask(task);
                    // }}
                    key={index}
                >
                    <div className="text">{task.gsx$pagename.$t}</div>
                    <div className="text page-score">{task.gsx$efficiency.$t}%</div>
                    <div className="create-time">{task.gsx$createtime.$t}</div>
                </div>
            ))}
        </div>
    );
};

export default AllList;
