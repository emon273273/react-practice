import classes from "./Layout.module.css"

import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";



function Layout(props){

  const path=window.location.pathname;
  // console.log("path is"+path)

    console.log(props)

    return(

        <div className={classes.app}>
        <nav>
          <div className={classes.brand}>
            <h1>Brand Name</h1>
          </div>
  
          <div className={classes.menu}>
            <ul>
              <li>
                <Link to={'/'} className={path==='/'?classes.active:classes.navItem}>
                  Home
                </Link>
              </li>
              <li>
              <Link to={'/about'} className={path==='/about'?classes.active:classes.navItem}>
                  About
                </Link>
              </li>
              <li>
              <Link to={'/help'} className={path==='/help'?classes.active:classes.navItem}>
                  Help
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <main className={classes.main}>
          {props.children}
        </main>
        <footer className={classes.footer}>
          <h3>Footer</h3>
          <ul>
            <li>footer link1</li>
            <li>footer link2</li>
            <li>footer link3</li>
          </ul>
  
    
        </footer>
      </div>
    )
}

export default Layout