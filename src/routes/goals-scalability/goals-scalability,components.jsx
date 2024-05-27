import { Link } from "react-router-dom";
import './goals-scalability.style.css'

const GoalsScalability = ()=>{
    return(
        <div>
             <div className='nav-menue'>
                <Link href="" className="nav-bar first" to='/main-objective'><i class="fa-solid fa-arrow-left"></i>Main Objective</Link>
                <Link href="" className="nav-bar second " to='/resources'>Resource <i class="fa-solid fa-arrow-right"></i></Link>
                <Link className="menu-position" to="/" ><div className="menu">Menu</div></Link>
            </div>
            <h1>Project goals and scalability</h1>
            <div className='content-container'>
                <p>1. Select the teachers who will give both the conference and the training.
                </p>
                <p>
                    2. Select the space in which the training and the healing sessions will be given. 
                </p>
                  
                <p >
                    3. Attract both Japanese and foreigners interested in learning the
                    Reiki art. 
                </p>
                <p >
                    3. Attract both Japanese and foreigners who whish to receive Reiki as part of their healing process. 
                     
                </p>
                <p >
                    3. Attract Reiki practitioners from all over the globe interested in volunteer. 
                </p>
                    4. Promote the event nationally and internationally.
                <p >
                    5. Generate links with Awaji's tourist service providers dedicated to wellness tourism to enhance the exprience of the visitor. 
                </p>

            </div>
        </div>
    )
}
export default GoalsScalability