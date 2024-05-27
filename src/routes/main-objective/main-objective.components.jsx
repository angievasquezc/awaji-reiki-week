import { Link } from "react-router-dom";
import './main-objective.style.css'

const MainObjective =()=>{
    return(
        <div>
            <div className='nav-menue'>
                <Link href="" className="nav-bar first" to='/problem/solution'><i class="fa-solid fa-arrow-left"></i>Problem //Solution</Link>
                <Link href="" className="nav-bar second" to='/goals-scalability'>Goals and Scalability <i class="fa-solid fa-arrow-right"></i></Link>
                <Link className="menu-position" to="/" ><div className="menu">Menu</div></Link>
                
            </div>
            <h1>Main Objective</h1>
            <div className='content-container'>
                <p>
                Strengthen the offer of wellness tourism through the teachings and practice of Reiki (the art of healing).</p>
            </div>
        </div>

    )
}
export default MainObjective