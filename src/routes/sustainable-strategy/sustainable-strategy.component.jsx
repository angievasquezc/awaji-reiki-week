import { Link } from "react-router-dom";
import './sustainable-strategy.style.css'

const SustainableStrategy =()=>{
    return(
        <div>
            <div className='nav-menue'>
                <Link href="" className="nav-bar first" to='/resources'><i class="fa-solid fa-arrow-left"></i> Resources</Link>
                <Link href="" className="nav-bar second" to='/key-points'>Final Key Points <i class="fa-solid fa-arrow-right"></i></Link>
                <Link className="menu-position" to="/" ><div className="menu">Menu</div></Link>
            </div>
            <h1>Sustainability strategy</h1>
            <div className='content-container'>
                <h2>1. How will it be economically sustainable?</h2>
            
                <p>
                    This will be part of a tourist offer, which will attract people looking for a wellness, learning and connection tourism. This initiative will attract conscious tourism to the island, which will also contribute to the community on an economic level. 
                </p>
                    <h2>
                    2. Barriers to entry (What problems you might face, and how will you prepare for them?)
                    </h2>
                <p>
                    The biggest barrier is finding the right people to interested in teaching the traditional knowledge of Reiki. 
                    <br />
                    Solution= This could be manage by doing the right research in the right places.             
                </p>
                    
                    <h2>3.Promotion tactics (How will you keep the project relevant with stakeholders?)</h2>
                    
               <p>
                    Because this initiative is relevant to wellness tourism, stakeholders will see an opportunity for growth and promotion during the week of the event. This is because the event will focus on attracting a relevant target audience to the stakeholder audience.
               </p>

            </div>
        </div>
    )
}
export default SustainableStrategy