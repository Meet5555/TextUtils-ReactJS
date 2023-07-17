import React from 'react'
import PropTypes from 'prop-types'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar(props) {
  let location = useLocation();
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} aria-current="page" to="/about">{props.aboutText}</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === "/contact" ? "active" : ""}`} aria-current="page" to="/contact">Contact</Link>
            </li>
          </ul>

          <div className="d-flex">
            <div className="bg-primary rounded-circle mx-2" onClick={() => { props.toggleMode('primary') }} style={{ height: '25px', width: '25px', cursor: 'pointer' }}></div>
            <div className="bg-danger rounded-circle mx-2" onClick={() => { props.toggleMode('danger') }} style={{ height: '25px', width: '25px', cursor: 'pointer' }}></div>
            <div className="bg-success rounded-circle mx-2" onClick={() => { props.toggleMode('success') }} style={{ height: '25px', width: '25px', cursor: 'pointer' }}></div>
            <div className="bg-warning rounded-circle mx-2" onClick={() => { props.toggleMode('warning') }} style={{ height: '25px', width: '25px', cursor: 'pointer' }}></div>
            <div className="bg-dark rounded-circle mx-2" onClick={() => { props.toggleMode('dark') }} style={{ height: '25px', width: '25px', cursor: 'pointer' }}></div>
            <div className="bg-light rounded-circle mx-2" onClick={() => { props.toggleMode('light') }} style={{ height: '25px', width: '25px', cursor: 'pointer' }}></div>
          </div>


          {/* <form className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-info" type="submit">Search</button>
    </form> */}

        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string
}

Navbar.defaultProps = {
  title: 'Set title here',
  aboutText: 'Set about here'
}