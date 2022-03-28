import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import Data from '../Data.json';

function Home() {
  
    return (<div>
        <Navbar />
        <div className="pictures">
        {Data.map(flower =>
        <section key={flower.id}>
            <Link to={"/taim/" + flower.id}>
                <h6>{flower.nimetus}</h6>
                <img src={flower.pilt} alt=""/> 
             </Link>
        </section>
            ) }
        </div>
    </div>);
} 
export default Home;