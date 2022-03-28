import { Link } from 'react-router-dom';
import SearchBar from "../components/SearchBar";

function Navbar() {
    return (
    <div className="navbar">
       
        <Link to='/'>
            <button>Avaleht</button>
       </Link>
        <Link to='/omadused'>
            <button>Taime omadused</button>
       </Link>
       <Link to='/lemmikud'>
            <button>Lemmikud <img src="/heart.png"/></button>
       </Link>
       <SearchBar />

{/*        
      <input type="text" placeholder="otsi nimetuse järgi"/>
       <button>OTSI <img src="/search.png"/></button>  */}
       
    </div>);
}
export default Navbar;