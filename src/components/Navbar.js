import React from 'react'
// import PropTypes from 'prop-types';
// import {Link} from "react-router-dom";

function Navbar(props) {

  return (
    <div className="mb-3">
         <nav className={`navbar navbar-expand-lg navbar-dark bg-dark`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link" href="/about">About Us</a>
        </li> */}
      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}

{/* <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
  <label className={`form-check-label text-${props.mode==="dark" ? "light":"dark"}`} htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
</div> */}

<label htmlFor="/" style={{color:"white",padding:"0px 20px",fontSize:"15px"}}>Theme</label>
<input type="color" name="color" id="colorpicker" onChange={(e)=>{props.changeTheme(e.target.value)}} value={props.theme}/>


    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar;

// Navbar.propTypes={
//   title: PropTypes.string,
//   about: PropTypes.string,
// }


// Navbar.defaultProps={
//     title: "Title",
//     about : "About Textutils",
// }