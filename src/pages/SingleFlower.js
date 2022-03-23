import Navbar from "../components/Navbar";

function SingleFlower(){
    console.log(window.location.href.split("taim/"));
    console.log(window.location.href.split("taim/") [1]);

    const taimeNimetus = (window.location.href.split("taim/") [1]);

    const taim = getFlowers().find(element=>
        element.id === taimeNimetus);
    console.log(taim);

    function getFlowers() {
        return [{id:"100",nimetus:"Hüatsint", taimegrupp:"püsikud", õitsemisaeg:"kevad,talv", külmataluvus:"olemas", kastmine: "vähene", valgus:"poolvarjus", kõrgus: "20-30cm", värvid: "lilla, punane", kirjeldus: "kirjeldus", pilt:"/flowers/hyatsintPurple.jpeg"},
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
    }
    function addFavorite(){
        console.log("lisab lemmikuks");
    }

    return (
        <div>
            <Navbar />
         <div className="singleFlower">
            <div> Nimetus: {taim.nimetus}</div>
            <div> Taimegrupp: {taim.taimegrupp}</div>
            <div> Õitsemisaeg: {taim.õitsemisaeg}</div>
            <div> Külmataluvus: {taim.külmataluvus}</div>
            <div> Kastmine: {taim.kastmine}</div>
            <div> Valgus: {taim.valgus}</div>
            <div> kõrgus: {taim.kõrgus}</div>
            <div> Värvid: {taim.värvid}</div><br/>
            <img src={taim.pilt} alt="" /><br/>  
            <button onClick={addFavorite}>Lisa lemmikuks <img src="/heartEmty.png"/></button><br/><br/>    
            <div> Kirjeldus: {taim.kirjeldus}</div> 
         </div>
        </div>
    );
}
export default SingleFlower;