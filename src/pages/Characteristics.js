import Navbar from "../components/Navbar";
import { useState } from 'react';
import { MultiSelect } from "react-multi-select-component";
import { useTranslation } from "react-i18next";

function Characteristics () {
  const { t, i18n } = useTranslation();

    const [selected, setSelected] = useState([]);
    const [selected1, setSelected1] = useState([]);
    const [selected2, setSelected2] = useState([]);
    const [selected3, setSelected3] = useState([]);
    const [selected4, setSelected4] = useState([]);
    const [selected5, setSelected5] = useState([]);
    const [selected6, setSelected6] = useState([]);

    const taimegrupp = [
        { label: "püsikud", value: "pysikud" },
        { label: "suvelilled", value: "suvelilled" },
      ];
    const oitsemisaeg = [
        { label: "kevad ", value: "kevad" },
        { label: "varasuvi", value: "varasuvi" },
        { label: "kesksuvi", value: "kesksuvi" },
        { label: "hilissuvi", value: "hilissuvi" },
        { label: "sügis", value: "sygis" },
      ];
      const varvid = [
        { label: "🔴", value: "red" },
        { label: "🔵", value: "blue" },
        { label: "🟢", value: "green" },
        { label: "🟡", value: "yellow" },
        { label: "🟣", value: "purple" },
        { label: "⚪", value: "white" },
        { label: "⚫", value: "black" },
      ];
      
      const kastmine = [
        { label: "vähene", value: "vahene" },
        { label: "keskmine", value: "keskmine" },
        { label: "rohke", value: "rohke" },
      ];
      const valgus = [
        { label: "varjus", value: "varjus" },
        { label: "poolvarjus", value: "poolvarjus" },
        { label: "päikseline", value: "paikseline" },
      ];
      const korgus = [
        { label: "kuni 15cm", value: "kuni15cm" },
        { label: "15-30cm", value: "1530cm" },
        { label: "üle 30cm", value: "ule30cm" },
        
      ];
      
      const kulmataluvus = [
        { label: "olemas", value: "olemas" },
        { label: "pole", value: "pole" },
      ];
      // const minuTolked = [{
      //   allItemsAreSelected: "Kõik on valitud.",
      //   clearSearch: "Tühjenda otsing",
      //   noOptions: "Pole valikuid",
      //   search: "Otsi",
      //   selectAll: "Vali kõik",
      //   selectSomeItems: "Vali..."
      // }];
     
     
      // Array.from(document.getElementsByClassName("dropdown-heading-value")).forEach(element => {
      //   element.textContent = "Vali";
      // });
      // document.getElementsByClassName("dropdown-heading-value")[0].textContent = "Vali";
    //   function changeLang(language) {
    //     i18n.changeLanguage(language);
    //     localStorage.setItem("language",language);
    // }

    return (
    <div>
    <Navbar />
    {/* <button onClick= {() => changeLang ('en')}>EN</button> 
    <button onClick= {() => changeLang('ee')}>EE</button>  */}
    <div className="rmsc">
      <h3>Vali taime omadused</h3>
      {/* <pre>{JSON.stringify(selected)}</pre> */}
      <label>Taimegrupp</label>
      <MultiSelect  
        disableSearch="true"
        options={taimegrupp}
        value={selected}
        onChange={setSelected}
        selectSomeItems={t("selectSomeItems")}
        // selectAll="Vali kõik"
        // labelledBy={t("vali")}
      />
      <label>Õitsemisaeg</label>
      {/* <pre>{JSON.stringify(selected1)}</pre> */}
      <MultiSelect
        disableSearch="true"
        options={oitsemisaeg}
        value={selected1}
        onChange={setSelected1}
        labelledBy="Select"
      />
     <label>Värvid</label>
      {/* <pre>{JSON.stringify(selected6)}</pre> */}
      <MultiSelect
        disableSearch="true"
        options={varvid}
        value={selected6}
        onChange={setSelected6}
        labelledBy="Select"
      />
      <label>Kastmine</label>
      <MultiSelect
        disableSearch="true"
        options={kastmine}
        value={selected3}
        onChange={setSelected3}
        labelledBy="Select"
      />
      <label>Valgus</label>
      <MultiSelect
        disableSearch="true"
        options={valgus}
        value={selected4}
        onChange={setSelected4}
        labelledBy="Select"
      />
      <label>Kõrgus</label>
      <MultiSelect
        disableSearch="true"
        options={korgus}
        value={selected5}
        onChange={setSelected5}
        labelledBy="Select"
      />
     
       <label>Külmataluvus</label>
      <MultiSelect
        disableSearch="true"
        options={kulmataluvus}
        value={selected2}
        onChange={setSelected2}
        labelledBy="Select"
      />
    </div>
</div>);
}

export default Characteristics;