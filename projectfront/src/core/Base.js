import React from 'react'
import Menu from './Menu';


const Base=({
    title= "My title",
    description = "My description",
    className = "bg-dark text-white p-4",
    children
})=> {
    return (
        <div>
        <Menu/>
             <div className="container-fluid">
                 <div className="jumboton bg-dark text-white text-center">
                   <h2 className="display-4">{title}</h2>
                   <p className="lead">{description}</p>
                 </div>
                    <div className={className}>{children}</div>
             
             </div>

               <footer className="footer bg-dark mt-auto py-4">
                  <div className="container-fluid  bg-success text-white text-center">
                    <h4>If you have any question,feel free to rech us!</h4>
                    <button className="btn btn-warning btn-lg">Contact-Us</button>
                  </div>
                  <div className="container">
                    <span className="text-muted">Admin <span className="text-white">Area</span> </span>
                  </div>
               </footer>

            
        </div>
    )
}



export default Base;