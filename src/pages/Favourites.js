import { useState } from "react";
import Navbar from "../components/Navbar";


function Favourites (){
const [favouritesFlowers, setFavouritesFlowers] = useState(getFavourites());

  function getFavourites () {
    if (sessionStorage.getItem("favourites")){
      return JSON.parse(sessionStorage.getItem("favourites"));
    } else {
      return [];
    }
  }
  
  function deleteFavourite(fav){
    let favourites = favouritesFlowers.slice();
    console.log(favourites);
    console.log(fav.favoriteFlower);
    const index = favouritesFlowers.findIndex(element => element.favoriteFlower.id === fav.favoriteFlower.id);
    console.log(index);
    favourites.splice(index,1);
    setFavouritesFlowers(favourites);
    sessionStorage.setItem("favourites",JSON.stringify(favourites));
    
  }
  
    return (
    <div >
      <Navbar />  
      <div className="favourites" >
     {getFavourites().map(flower => 
     <div key={flower.favoriteFlower.id}>  
      <h6>{flower.favoriteFlower.nimetus}</h6> 
     <img src={flower.favoriteFlower.pilt} alt=""/> <br />
     <button onClick={() => deleteFavourite(flower)}> Kustuta</button><br /><br />
     </div>)}
     </div>
    Suundu poodi....
    </div>);
}
export default Favourites;
