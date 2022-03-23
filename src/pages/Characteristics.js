import Navbar from "../components/Navbar";

function Characteristics () {
    return (
    <div>
    <Navbar />
    II valik- lille omaduste põhjal. Filtri abil saad valida omadused, mis väljastab sobivad taimed. Valikud on rippmenüüdena checkboxid.<br />
    Taimegrupp - suvelilled, püsikud;<br />
    Õitsemisaeg - kevad, varasuvi, kesksuvi, hilissuvi, sügis;<br />
    Külmataluvus- olemas, pole; <br />
    Kastmine - vähene, keskmine, rohke;<br />
    Valgus - varjus, poolvarjus, päikseline;<br />
    Kõrgus - kõrgus cm’tes või rippuv;<br />
    Värvid- erinevad värvid ringidena. <br />
    Väljastab taimed, mis filtreeriti.
</div>);
}

export default Characteristics;