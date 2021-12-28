import React,{useState} from "react";

export const AddTodo = ({addTodo}) => {
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")

  const submit = (e) => {
    e.preventDefault();
    if(!title || !desc){
      alert("Title or Description cannot be blank!!");
    }
    addTodo(title, desc);

  }



  return (
    <div className="container my-4">
        <h2>ADD TODO</h2>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="title"
            value={title}
            className="form-control"
            id="title"
            onChange={(e)=>setTitle(e.target.value)}
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Description
          </label>
          <input
            type="desc"
            value={desc}
            onChange={(e)=>setDesc(e.target.value)}
            className="form-control"
            id="desc"
          />
        </div>
        
        <button type="submit" className="btn btn-sm btn-success">
          AddTodo
        </button>
      </form>
    </div>
  );
};
