import { useState } from "react";
import Navbar from "../components/Navbar";

function Favourites (){
const [favouritesFlowers, setFavouritesFlowers] = useState(getFavourites());

  function getFavourites () {
    if (sessionStorage.getItem("favourites")){
      return JSON.parse(sessionStorage.getItem("favourites"));
    } else {
      const favourites =  [{id:"100",nimetus:"Hüatsint", taimegrupp:"püsikud", õitsemisaeg:"kevad,talv", külmataluvus:"olemas", kastmine: "vähene", valgus:"poolvarjus", kõrgus: "20-30cm", värvid: "lilla, punane", kirjeldus: "kirjeldus", pilt:"/flowers/hyatsintPurple.jpeg"},
      {id:"101",nimetus:"Inkaliilia", taimegrupp:"püsikud", õitsemisaeg:"kesksuvi", külmataluvus:"olemas", kastmine: "keskmine", valgus:"poolvarjus,päikseline", kõrgus: "30-50cm", värvid: "lilla, punane, valge", kirjeldus: "kirjeldus", pilt:"/flowers/inkaliiliaPinkYellow.jpeg"},
      {id:"102",nimetus:"Kanarbik", taimegrupp:"suvelilled", õitsemisaeg:"sügis", külmataluvus:"olemas", kastmine: "keskmine", valgus:"päikseline", kõrgus: "20-40cm", värvid: "roosa, punane, valge", kirjeldus: "kirjeldus", pilt:"/flowers/kanarbikPurpleWhite.jpeg"},
      {id:"103",nimetus:"Kirinõges", taimegrupp:"suvelilled", õitsemisaeg:"hilissuvi", külmataluvus:"pole", kastmine: "keskmine", valgus:"poolvarjus,päikseline", kõrgus: "15-30cm", värvid: "kirju", kirjeldus: "kirjeldus" , pilt:"/flowers/kirin6gesed.jpeg"},
      {id:"104",nimetus:"Mandvilla", taimegrupp:"suvelilled", õitsemisaeg:"varasuvi,kesksuvi,hilissuvi", külmataluvus:"pole", kastmine: "keskmine", valgus:"päikseline", kõrgus: "100-150cm", värvid: "roosa, punane", kirjeldus: "kirjeldus", pilt:"/flowers/mandvillRed.jpeg"},
      {id:"105",nimetus:"Pelargoon", taimegrupp:"suvelilled", õitsemisaeg:"varasuvi,kesksuvi,hilissuvi", külmataluvus:"pole", kastmine: "keskmine", valgus:"päikseline", kõrgus: "30cm", värvid: "roosa, punane", kirjeldus: "kirjeldus", pilt:"/flowers/pelargoon.jpeg" },
      {id:"106",nimetus:"Petuunia", taimegrupp:"suvelilled", õitsemisaeg:"varasuvi,kesksuvi,hilissuvi", külmataluvus:"pole", kastmine: "keskmine", valgus:"poolvarjus,päikseline", kõrgus: "15-30cm", värvid: "lilla, punane, kollane, valge, kirju", kirjeldus: "kirjeldus", pilt:"/flowers/petuuniaPurple.jpeg"},
      {id:"107",nimetus:"Puispetuunia", taimegrupp:"suvelilled", õitsemisaeg:"varasuvi,kesksuvi,hilissuvi", külmataluvus:"pole", kastmine: "keskmine", valgus:"poolvarjus,päikseline", kõrgus: "30-40cm", värvid: "lilla, punane, kollane, valge, kirju", kirjeldus: "kirjeldus", pilt:"/flowers/puispetuunia.jpeg"},
      {id:"108",nimetus:"Ruse", taimegrupp:"suvelilled", õitsemisaeg:"kesksuvi", külmataluvus:"pole", kastmine: "rohke", valgus:"poolvarjus,päikseline", kõrgus: "20-30cm", värvid: "kollane", kirjeldus: "kirjeldus", pilt:"/flowers/ruseOrange.jpeg"},
      {id:"109",nimetus:"Tukalill", taimegrupp:"suvelilled", õitsemisaeg:"kesksuvi", külmataluvus:"pole", kastmine: "keskmine", valgus:"päikseline", kõrgus: "25cm", värvid: "valge", kirjeldus: "kirjeldus", pilt:"/flowers/tukalillWhite.jpeg" },
      {id:"110",nimetus:"Võõrasema", taimegrupp:"suvelilled", õitsemisaeg:"kevad,varasuvi,kesksuvi,hilissuvi,sügis", külmataluvus:"olemas", kastmine: "keskmine", valgus:"poolvarjus,päikseline", kõrgus: "15-30cm", värvid: "sinine,lilla,kollane,valge,kirju", kirjeldus: "kirjeldus", pilt:"/flowers/v66rasemaPurpleYellow.jpeg" },
  ];
  sessionStorage.setItem("favourites", JSON.stringify(favourites));
  return favourites;
  // return[];
    }
  
  }
  
  function deleteFavourite(fav){
    console.log("kustuta lemmik");
    let favourites = favouritesFlowers.slice();
    const index = favourites.indexOf(fav);
    favourites.splice(index,1);
    setFavouritesFlowers(favourites);
    sessionStorage.setItem("favourites",JSON.stringify(favourites));
    
  }
    return (
    <div >
      <Navbar />  
      <div className="favourites" >
     {getFavourites().map(flower => <div>
      <h6>{flower.nimetus}</h6> 
     <img src={flower.pilt} alt=""/> <br />
     {/* <button onClick={deleteFavourite}> Kustuta</button><br /><br /> */}
     <button onClick={() => deleteFavourite(fav)}> Kustuta</button><br /><br />
     </div>)}
     </div>
    Suundu poodi....
    </div>);
}
export default Favourites;
