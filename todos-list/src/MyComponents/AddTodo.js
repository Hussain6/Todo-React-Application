import React, { useState } from 'react';

export const AddTodo = ({addTodo}) => {
const [title, setTitle] = useState("")
const [desc, setDesc] = useState("");


const submit=(e)=>{
  e.preventDefault();
   if(!title || !desc){
     alert("Title or Description cannot be blank")
     }
     addTodo(title,desc);
   }
    return (
        <div classNameName="container my-3" >

            <h3>Add a Todo</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Todo Title</label>
                    <input type="text" value= {title} className="form-control" onChange={(e)=>{setTitle(e.target.value)}}  aria-describedby="emailHelp"/>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Todo Desc</label>
                        <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} className="form-control" id="exampleInputPassword1"/>
                     </div>
                            <button type="submit" className="btn btn-success btn-sm">Add Todo</button>
</form>
                    </div>
                    )
}
