import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function EditTask() {

    const urlBase = "http://localhost:8080/tasks-app/tasks";
    
    let navigation = useNavigate();

    const {id} = useParams();

    const[task, setTask] = useState ({
        taskName:"",
        responsiblePerson:"",
        status:""
    })

    const{taskName, responsiblePerson, status} = task

    useEffect(()=>{
      loadTask();
    }, [])

    const loadTask = async () => {
      const result = await axios.get(`${urlBase}/${id}`)
      setTask(result.data);
    }

    const onInputChange = (e) => {
        setTask({...task, [e.target.name]: e.target.value})
    }

    const onSubmit = async(e) => {
        e.preventDefault();
        await axios.put(`${urlBase}/${id}`, task);
        navigation('/');
    }

  return (
<div className="container">
    <div className="container text-center" style={{margin: "30px"}}>
        <h3>Edit task</h3>
    </div>
    <form onSubmit={(e) => onSubmit(e)}>
        <div className="mb-3">
          <label htmlFor="taskName" className="form-label">Task</label>
          <input type="text" className="form-control" id="taskName" name="taskName" required={true}
          value={taskName} onChange={(e) => onInputChange(e)} />
        </div>
        <div className="mb-3">
          <label htmlFor="responsiblePerson" className="form-label">Responsible person</label>
          <input type="text" className="form-control" id="responsiblePerson" name="responsiblePerson"
           value={responsiblePerson} onChange={(e) => onInputChange(e)}/>
        </div>
        <div className="mb-3">
            <label htmlFor="status" className="form-label">Status</label>
            <input type="text" className="form-control" id="status" name="status"
             value={status} onChange={(e) => onInputChange(e)}/>
        </div>
        <div className="container text-center" style={{margin: "30px"}}>
            <button type="submit" className="btn btn-warning btn-sm me-3">Save changes</button>
            <a href="/" className="btn btn-danger btn-sm me-3">Return</a>
        </div>
      </form>
</div>
  )
}
