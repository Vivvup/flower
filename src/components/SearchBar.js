import React, {useState} from 'react';
import Data from '../Data.json';
import { Link } from 'react-router-dom';


function SearchBar () {
    const [query, setQuery] = useState("");

return (
    <div >
     <input placeholder="Sisesta taim" onChange={event => setQuery(event.target.value)} />
<div className="searchResults">
{  
    Data.filter(flower => {
      if (query === '') {
        return "";
      } else if (flower.nimetus.toLowerCase().includes(query.toLowerCase())) {
        return flower;
      } 
    }).map((flower, index) => (
      <div key={index}>
        <Link to={"/taim/" + flower.id} onClick={() => {window.location.href = "/taim/" + flower.id}}>
        {flower.nimetus} &nbsp;
        </Link>
      </div>
    ))
  }
  </div>
  </div>);
}
export default SearchBar;

