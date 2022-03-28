import Navbar from "../components/Navbar";
import Data from '../Data.json';

function SingleFlower(){
    // console.log(window.location.href.split("taim/"));
    // console.log(window.location.href.split("taim/") [1]);

    const taimeNimetus = (window.location.href.split("taim/") [1]);

    const taim = Data.find(element=>
        element.id.toString() === taimeNimetus);
     console.log(taim);

     function addFavorite(lisatavLill){
        console.log(lisatavLill);
        if (sessionStorage.getItem("favourites")) {
            const favoriteFlower = JSON.parse(sessionStorage.getItem("favourites"));
            console.log(favoriteFlower);
            const index = favoriteFlower.findIndex(flower => flower.favoriteFlower.id === lisatavLill.id)
            if (index === -1) {
                favoriteFlower.push({favoriteFlower: lisatavLill});
            }
           sessionStorage.setItem("favourites", JSON.stringify(favoriteFlower));
        } else {
       const favoriteFlower = [{favoriteFlower: lisatavLill}];
       sessionStorage.setItem("favourites", JSON.stringify(favoriteFlower));
      } 
    }

    return (
        <div>
            <Navbar />
         <div className="singleFlower">
            <div> Nimetus: {taim.nimetus}</div>
            <div> Taimegrupp: {taim.taimegrupp}</div>
            <div> Õitsemisaeg: {taim.oitsemisaeg}</div>
            <div> Külmataluvus: {taim.kulmataluvus}</div>
            <div> Kastmine: {taim.kastmine}</div>
            <div> Valgus: {taim.valgus}</div>
            <div> kõrgus: {taim.korgus}</div>
            <div> Värvid: {taim.varvid}</div><br/>
            <img src={taim.pilt} alt="" /><br/>  
            <button onClick={()=> addFavorite (taim)}>Lisa lemmikuks <img src="/heartEmty.png"/></button><br/><br/>    
            <div> Kirjeldus: {taim.kirjeldus}</div> 
         </div>
        </div>
    );
}
export default SingleFlower;