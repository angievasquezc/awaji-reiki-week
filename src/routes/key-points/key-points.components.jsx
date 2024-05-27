import { Link } from "react-router-dom";
import './key-points.style.css'

const KeyPoints =()=>{
    return(
        <div>

            <div className='nav-menue'>
                <Link href="" className="nav-bar last-item" to='/sustainable-strategy'><i class="fa-solid fa-arrow-left"></i> Strategy</Link>
                <Link className="menu-position" to="/" ><div className="menu">Menu</div></Link>
                
            </div>
           
            <h1>Final Proposal Key Points</h1>
            <div className='content-container'>
                <h2>1. Show a clear need for your idea connected to Awaji</h2>
                
                <p> Awaji has been developing strategies to position itself as a wellness destination, So, this Event will focus to add value to these initiatives. During this week, importance will be added to well-being and healing. So, this will allow more people to recognize Awaji as the best to place to heal in a holistic and complete way </p>
               
                <h2>2. Show what makes you and your unique idea</h2>
                
               <p> Suffering is universal, no matter the religion, the nationality, the language, economic status,and so on, and this is why I consider that the ability to heal is a birthright, a right and an ability that we have lost with time due to the technological advances the media, the demands of society. And this is how more young people are getting sick and die at an early age, because the connection with the land and with ourselves is lost.
                <br /> 
                So, by adding Reiki to the existing initiative of weelbeing in Awaji, 
                The visitors' time spent on the island will not just be another travel experience but a gift.one of those that last for a lifetime. I must say,  once there is a connection with Reiki, it last forever</p>
               
                <h2>3. Show how you will start working on your idea with limited resources</h2>
                <p> I would contact well known reiki centers located in Japan interested in giving conferences and training about Reiki.</p>
                <p>I would look for the opportunity to attract volunteer teachers and practitioners from all over the globe.</p>
                <p>I would look for potential scenarios where to carry out the event.</p>
              
            </div>
        </div>
    )
}
export default KeyPoints