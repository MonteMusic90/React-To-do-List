import React from 'react';
import CheckBox from './CheckBox';
import ReactDOM from 'react-dom'
import Datetime from './Datetime';







export default function TodoItem(props) {
    const {data, changeStatus} = props;
    const handleChange = (checked) => changeStatus(data.id, checked);
    const className = 'todo-item ui-state-default ' + (data.completed === true ? 'completed' : 'pending');
  

    return (
        <li className={className}>
            <div className="checkbox" style={{display: "flex"}}>
                <label>
                    <CheckBox checked={data.completed} onChange={handleChange}/> {data.text}
                </label>
                <p id="date">Due Date <Datetime/></p>

            </div>
        </li>
    );
    
}





