import React from "react";
import { NavLink } from "react-router-dom";
const Navbar=props=>{
    return (
        <div>
            <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">Toggle top offcanvas</button>

<div class="offcanvas offcanvas-top" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasTopLabel">RepoHub</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <div>
    <ul className="list-group list-group-flush ">
  <li className="list-group-item border-0"><NavLink to="/" className={ ({isActive})=> isActive ? "text-success h5 text-decoration-none":"h5 text-decoration-none"}>Home</NavLink></li>
  <li class="list-group-item border-0"><NavLink to="/story" className={ ({isActive})=> isActive ? "text-success h5 text-decoration-none":"h5 text-decoration-none" }>Story</NavLink></li>
  <li class="list-group-item border-0"><NavLink to="/services" className={ ({isActive})=> isActive ? "text-success h5 text-decoration-none":"h5 text-decoration-none" }>Services</NavLink></li>
  <li class="list-group-item border-0"><NavLink to="/contact" className={ ({isActive})=> isActive ? "text-success h5 text-decoration-none":"h5 text-decoration-none" }>Contact</NavLink></li>
  
 </ul></div>
  </div>
</div>
        </div>
    )
}
export default Navbar;