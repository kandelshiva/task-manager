import React, { useState } from 'react';

export default function TasksList() {
    const [tasks, setTasks] = useState([
        {id: 1,
            title: "Complete Project Report",
            description: "Finish the final report and submit it to the manager.",
            dueDate: "2025-02-15",
            status: "In Progress",
        },

        {
            id: 2,
            title: "Review Code",
            description: "Review pull requests from the development team.",
            dueDate: "2025-02-12",
            status: "Done"            

        }
    ]);
    const [newtask, setNewTask]=useState([{title:'', description:'', dueDate:'', status:'To Do'}, ])

    const handleAddTask = () => {
        if (!newtask.title|| !newtask.description|| !newtask.dueDate) 
            return;

        setTasks([...tasks, {...newtask, id:tasks.length+1}]);
        setNewTask({title:'', description:'', dueDate:'', status:'To Do'});
        
        };


    const handleDeleteTask = (id) => {
        setTasks(tasks.filter((tasks => tasks.id!== id)));
    };
    
    

    return (
        <div>
            <input
                type='text'
                value={tasks.title}
                onChange={(e) => setNewTask(e.target.value)}
                placeholder="Enter today's task"
            />
            <input
            type='text'
            placeholder='Description'
            value={tasks.description}
            onChange={(e)=>setNewTask(e.target.value)}
            />
            <input
            type='date'
            placeholder='Due-date'
            value={tasks.dueDate}
            onChange={(e)=>setNewTask.target.value}
            />
            <button onClick={handleAddTask} style={{backgroundColor:'lightblue',borderRadius:5}}>Add</button>

            <ul>
                {tasks.map((item, id) => (
                    <li key={tasks.id}>
                        <p>Title:{item.title}</p>
                        <p>Description: {item.description}</p>
                        <p>Due Date:{item.dueDate}</p>
                        <p><span style={{backgroundColor:item.status==='To Do'?'red':item.status==="In Progress"?'yellow':item.status==="Done"?'#00FF00':'whitesmoke',borderRadius:5}
                    }>Status: {item.status}</span></p>
                        <button onClick={() => handleDeleteTask(id)} style={{backgroundColor:'#8B0000',borderRadius:5}}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
