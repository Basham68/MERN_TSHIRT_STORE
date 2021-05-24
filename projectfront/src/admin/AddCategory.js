import React,{useState} from 'react'
import Base from "../core/Base";
import { isAutheticated } from "../auth/helper/index";
import { Link } from "react-router-dom";
import {createCategory} from "./helper/adminapicall"

const AddCategory = () =>{

const [name, setName] = useState("")
const [error, setError] = useState(false)
const [success, setSuccess] = useState(false)

const {user , token}=isAutheticated();

const handleChange=(event)=>{
  setError("")
  setName(event.target.value)
  setSuccess(true)
}

const onSubmit =(event)=>{
  event.preventDefault();
  setError("")
  setSuccess(false)


  createCategory(user._id,token, {name})
      .then(data =>{
         if(data.error){
           setError(true)
         }
         else{
           setError("")
           setSuccess(true)
           setName("")

         }
      
      }
        )
}


const succcessMessage =()=>{
  if(success){
  return <h4 className="text-success">Created Successfully</h4>
  }
}

const warningMessage =()=>{
  if(error){
  return <h4 className="text-danger">Failed</h4>
  }
}


const goback=()=>(
  <div className="mt-5">
    <Link className="btn btn-success mb-3" to="/admin/dashboard" > Admin Dashboard</Link>
  </div>
)

const myCategoryForm =()=>(
<form>
    <div className="form-group">
    <p className="lead">Enter The category</p>
    <input type="text" className="form-control my-3"  autoFocus required placeholder="For ex"
        onChange={handleChange} value={name}/>
    <button onClick={onSubmit} className="btn btn-outline-info">Enter Category</button>
    
    </div>

</form>

)



    return (
     <Base title="Create a category"
         description="Add a new category "
         className="container bg-info p-4"
         >
           <div className="row bg-white rounded">
             <div className="col-md-8 offset-md-2">
             {succcessMessage()}
             {warningMessage()}
              {myCategoryForm()}
              {goback()}
             </div>
           </div>
         
         
         
         </Base>
    )
}

export default AddCategory