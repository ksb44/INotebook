import React,{useEffect} from 'react';
import {useLocation} from 'react-router-dom'
import { Link } from 'react-router-dom';
function Navbar() {

    const handlelogout=()=>{

        localStorage.removeItem("accessToken");
        window.location.href="/login";
    }
    let location = useLocation()
    useEffect(()=>{},[location])
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/home">INote</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/home"? "active":""}`} aria-current="page" to="/home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/about"? "active":""}`} to="/about">About</Link>
        </li>
   
      </ul>
     {!localStorage.getItem('accessToken')? (<form className="d-flex" role="search">
        <Link className='btn btn-primary mx-2' to='/login' role='button'> Login</Link>
        <Link className='btn btn-primary' to='/signup' role='button'> Signup</Link>

      </form>):(<>       <p className='text-white m-2'>Welcome {localStorage.getItem('name')}</p>
       <button onClick={handlelogout} className='btn btn-primary'>Logout</button></>)}
    </div>
  </div>
</nav>
        </>
    )
}
export default Navbar;