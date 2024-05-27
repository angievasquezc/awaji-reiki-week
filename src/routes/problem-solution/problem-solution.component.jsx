import { Link } from "react-router-dom"
import './problem-solution.style.css'
const ProblemSolution =()=>{
    return(
        <div>
            <div className='nav-menue'>
                <Link href="" className="nav-bar first" to='/description'><i class="fa-solid fa-arrow-left"></i>Description</Link>
                <Link href="" className="nav-bar second" to='/main-objective'>Main objective <i class="fa-solid fa-arrow-right"></i></Link>
                <Link className="menu-position" to="/" ><div className="menu">Menu</div></Link>
            </div>
            <h1>Problem // Solution</h1>
            <div className='content-container'>
                <h2>Problem Identification </h2>
                <p>Currently Awaji has a touristic offer dedicated to attracting tourism with an interest in well-being. It is even a destination that attracts people from all over the world looking for an experience of healing from the inside out. However, from my point of view, Reiki is missing in this initiative. Reiki is not only a Japanese ancestral knowledge, but it is also an art of healing that allows people to empower themselves with their own healing processesm it helps to achieve a balance of body, mind and spirit, and having these three elements together is what makes a healing process holistic</p>
                <h2>Proposed Solution</h2>
                <p>
                    1.welcoming both Japanese and foreign visitors to learn Traditional Japanese Reiki during one week.
                <br />
                    2. welcoming both Japanese and foreign visitors whi wish to receive Reiki as their process of healing. 
                <br />                 
                    3. Iniviting practitioners from all over the globe who wish to volunteer giving Reiki to toher people. 
                <br />
                    4. invite Reiki teachers that have an interest to give conferences about Reiki. Promoting the learning of Reiki as the art of healing and as a right of birth.
                </p>
            </div>
        </div>
    )
}
export default ProblemSolution