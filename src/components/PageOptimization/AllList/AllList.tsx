import './style/AllList.css';
import { AllListType } from '../Type';

const AllList = ({ allTasks, setTargetTask }: AllListType) => {
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
