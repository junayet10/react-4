import React, { useState } from 'react';

const App = () => {
  let [title,setTitle] = useState('');
  let [edit,setEdit] = useState(false);
  let [update,setUpdate] = useState(null);


  let [notes,setNotes] = useState([
    {id:1,note:"Here senior employee details"},
    {id:2,note:"Here junior employee details"},
    {id:3,note:"Here company intern details"},
  ])

  let formSubmit =(e)=>{
 e.preventDefault();

  if(title.trim() ===''){
    alert("please enter details");
  }
  else{
    edit ? updatelatest() : createNote();
  }
 
  }
  let createNote = ()=>{
    let newNote = {
      id:notes.length+1,
      note:title
     }
    setNotes([newNote,...notes])
    setTitle('')
  }

  let updatelatest = () =>{
   let updateData = notes.map((item)=>{
      if(item.id == update.id){
        return{...item,note: title};
      }
      return item;
    })
    setNotes(updateData);
    setEdit(false);
    setTitle('');
  }

  let dlt = (dltId) =>{
    let newNotes = notes.filter((note) => note.id !== dltId)
    setNotes(newNotes);

  }
  
  let editData = (editData)=>{
setEdit(true)
setUpdate(editData)
setTitle(editData.note)
  }



  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-4">
            <div className="card">
              <div className="card-header">
                <h4>Form</h4>
              </div>
              <div className="card-body">
                <form action="" onSubmit={formSubmit}>
                  <input className='form-control' type="text" placeholder='Enter details' value={title} onChange={(e) => setTitle(e.target.value)}/>
                  <button type='submit' className='btn btn-primary w-100 my-3'>{edit ? 'Update' : 'Submit'}</button>
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="card">
              <div className="card-header">
                <h4>List</h4>
              </div>
              <div className="card-body">
                <ul className='p-0'>
               {
                notes.map((note,index) =>{
                  return(
                    <li key={index} style={{listStyle : 'none'}} className="alert alert-primary d-flex justify-content-between">
                    <span>{note.note}</span>
                    <div className="btn-group">
                    <button className='btn btn-success' onClick={()=>{editData(note)}}>Edit</button>
                    <button className='btn btn-danger' onClick={()=>{dlt(note.id)}}>Delete</button>
                    </div>
                  </li>
                  )

                })
               }
                  
                  
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
