import { Fragment } from "react"
import { Outlet } from "react-router-dom"
import { Link } from "react-router-dom"
import './navigation.style.css'

const Navigation =()=>{
    return(
    
            <Fragment>
                <h1 className="title">Awaji Reiki Week</h1>
           
            <div className="container-list">
                <Link href="" className="project-menu" to={'/description'}>Description</Link>
                <Link href="" className="project-menu" to='/problem/solution'>Problem  // Solution</Link>
                <Link href="" className="project-menu" to='/main-objective'>Main objective</Link>
                <Link href="" className="project-menu" to='/goals-scalability'>project goals & scalability</Link>
                <Link href="" className="project-menu" to='/resources'>Resource requirements</Link>
                <Link href="" className="project-menu" to='/sustainable-strategy'>Sustainability strategy</Link>
                <Link href="" className="project-menu" to='/key-points'>Final Proposal Key Points</Link>
                
            </div>
             
            </Fragment>
          )
        
}
export default Navigation