import React, { useState } from 'react';

const AddTodo = ({addTodo}) => {

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert("title or description cannot be blank");
        }
        else{
            addTodo(title, desc);
            setTitle("")
            setDesc("")
        }
    }
  return (
    <div className="container my-3 px-5 addtodo">
        <h3 className='text-decoration-underline fw-bold my-4'>Add Todo</h3>
        <form onSubmit={submit}>
            <div className='mb-3'>
                <label htmlFor="title" className="form-label">Todo Title</label>
                <input type="text" value={title} className="form-control" onChange={(e)=>setTitle(e.target.value)} id="title" />
            </div>
            <div className='mb-3'>
                <label htmlFor="desc" className="form-label">Todo Description</label>
                {/* <input type="text" value={desc} className="form-control" onChange={(e)=>setDesc(e.target.value)} id="desc" /> */}
                <textarea value={desc} rows='6' className="form-control" onChange={(e)=>setDesc(e.target.value)} id="desc"></textarea>
            </div>
            <button type="submit" className="btn btn-sm btn-success">Submit</button>
        </form>
    </div>
  )
}

export default AddTodo
