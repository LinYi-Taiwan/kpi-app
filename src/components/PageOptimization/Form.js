import { useState } from 'react';
const Form = ({ allTasks, setAllTasks }) => {
    const [beforeScore, setBeforeScore] = useState(0);
    const [afterScore, setAfterScore] = useState(0);
    const [pageName, setPageName] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        setAllTasks([
            ...allTasks,
            {
                pageName: pageName,
                beforeScore: beforeScore,
                afterScore: afterScore,
                efficiency: ((afterScore - beforeScore) / beforeScore).toFixed(2) * 100,
            },
        ]);
    };

    return (
        <div>
            <form>
                <div>
                    <span>page name</span>
                    <input
                        type="text"
                        name="pageName"
                        onBlur={(e) => {
                            setPageName(e.target.value);
                        }}
                        className="todo-input"
                    />
                </div>
                <div>
                    <span>before</span>
                    <input
                        type="text"
                        name="beforeScore"
                        onBlur={(e) => {
                            setBeforeScore(e.target.value);
                        }}
                        className="todo-input"
                    />
                </div>

                <div>
                    <span>after</span>
                    <input
                        type="text"
                        name="afterScore"
                        onBlur={(e) => {
                            setAfterScore(e.target.value);
                        }}
                        className="todo-input"
                    />
                </div>
                <button onClick={submitHandler} className="todo-button" type="submit">
                    <i className="fas fa-plus-square">Submit</i>
                </button>
                <div className="select">
                    <select name="todos" className="filter-todo">
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="uncompleted">Uncompleted</option>
                    </select>
                </div>
            </form>
        </div>
    );
};

export default Form;
