import './description.style.css'
import { Link } from 'react-router-dom'
const Description = ()=>{
    return (
        <div>
            <div className='nav-menue'>
                
                <Link href="" className="nav-bar self-item"to='/problem/solution'>Problem //Solution <i class="fa-solid fa-arrow-right"></i></Link>
                <Link className="menu-position" to="/" ><div className="menu">Menu</div></Link>
            </div>
            <h1>Project Description</h1>
            <div className='content-container'>
                <p>In recent years, Awaji has positioned itself as a destination with a tourism offer of wellness. Thanks to a collective effort of the community to preserve the ancestral knowledge and develop sustainable practices in all its sources of income.</p>

                <p>Currently, there are several initiatives that try to position Awaji as a destination for physical and mental well-being. This through a gastronomic offer that Promote healthy, natural, ecological and fresh eating. I would dare to describe this proposed as live foods from the land to the table. In addition, Awaji also has an offer that promotes mental health, with spaces suitable for meditation and natural settings that enhance the process of healing the body and the mind.</p>

                <p>Having said the above, it could be stated that in each healing process there must be 2 focuses: one on the body and another on the mind. However, there is something missing. And that is the energy. And this, because, from my own personal experience, it is not only important to be aware of what we eat and what we think, but also, of how our energy moves.</p>

                <p>This is why I would like to talk about Reiki as part of the wellness tourism offer in awaji.</p>

                <h2>Why Reiki?</h2>
                <p>Reiki is a Japanesse Ancestral knowledge known as the art of hearling. Reiki helps us to heal in a holistic way. It strengthens the relation between our mind and body. It gives us clarity and opens the way to a spiritual awakening.</p>

                <h2>Why Reiki in Awaji?</h2>
                <p>To be honest when I think of awaji the words that come to mind are
                Japan, rest, healing, mediation, connection, love, food and reiki. and,
                Although reiki is a Japanese healing art, There's no Reki in Awaji. Awaji has the whole package to have a healing tourism experience, it hast the food, it hast the scenarios it has the people, so I couldn't think in a better way to add value to the healing experience than to adding Reiki to the offer. </p>
            </div>
        </div>
            
    )
}

export default Description