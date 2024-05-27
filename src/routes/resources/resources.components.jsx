import { Link } from "react-router-dom";
import './resources.style.css'

const Resources =()=>{
    return(
        <div>
             <div className='nav-menue'>
                <Link href="" className="nav-bar first" to='/goals-scalability'><i class="fa-solid fa-arrow-left"></i> goals & scalability</Link>
                <Link href="" className="nav-bar second" to='/sustainable-strategy'>Strategy <i class="fa-solid fa-arrow-right"></i></Link>
                <Link className="menu-position" to="/" ><div className="menu">Menu</div></Link>
            </div>
            <h1>Rough Resource requirements</h1>
            <div className='content-container'>
                <h2>
                Initiative: Reiki Week
                </h2>
                <h3>Resources:</h3>
                    <br />
                <p >
                    1. People= Reiki teachers who wish to impart their knowledge to locals and foreigners.
                </p >
                <p>
                    2. Space in which the event will take place
                </p >
                <p>
                    3. Advertising campaigns
                </p>
                

            </div>
        </div>
    )
}
export default Resources