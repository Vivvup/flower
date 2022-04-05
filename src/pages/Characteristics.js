import Navbar from "../components/Navbar";
import { useState } from 'react';
import { MultiSelect } from "react-multi-select-component";
import Data from '../Data.json';

function Characteristics() {

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
  const minuTolked = {
    "allItemsAreSelected": "Kõik on valitud",
    "clearSearch": "Tühjenda otsing",
    "noOptions": "Pole valikuid",
    "search": "Otsi",
    "selectAll": "Vali kõik",
    "selectSomeItems": "Vali..."
  }

  return (
    <div>
      <Navbar />
      <div className="rmsc">
        <h3>Vali taime omadused</h3>
        {/* <pre>{JSON.stringify(selected)}</pre> */}
        <label>Taimegrupp</label>
        <MultiSelect overrideStrings={minuTolked}
          disableSearch="true"
          options={taimegrupp}
          value={selected}
          onChange={setSelected}
        />
        <label>Õitsemisaeg</label>
        {/* <pre>{JSON.stringify(selected1)}</pre> */}
        <MultiSelect overrideStrings={minuTolked}
          disableSearch="true"
          options={oitsemisaeg}
          value={selected1}
          onChange={setSelected1}

        />
        <label>Värvid</label>
        {/* <pre>{JSON.stringify(selected2)}</pre> */}
        <MultiSelect overrideStrings={minuTolked}
          disableSearch="true"
          options={varvid}
          value={selected2}
          onChange={setSelected2}
        />
        <label>Kastmine</label>
        <MultiSelect overrideStrings={minuTolked}
          disableSearch="true"
          options={kastmine}
          value={selected3}
          onChange={setSelected3}
        />
        <label>Valgus</label>
        <MultiSelect overrideStrings={minuTolked}
          disableSearch="true"
          options={valgus}
          value={selected4}
          onChange={setSelected4}
        />
        <label>Kõrgus</label>
        <MultiSelect overrideStrings={minuTolked}
          disableSearch="true"
          options={korgus}
          value={selected5}
          onChange={setSelected5}
          labelledBy="Select"
        />
        <label>Külmataluvus</label>
        <MultiSelect overrideStrings={minuTolked}
          disableSearch="true"
          options={kulmataluvus}
          value={selected6}
          onChange={setSelected6}
        />
      </div>

      <div className="pictures">

        {/* Taimed: {selected.map(item => item.label).join(', ')}
        Õitsemisaeg : {selected1.map(item => item.label).join(', ')}
        Värvid: {selected2.map(item => item.label).join(', ')}
        Kastmine: {selected3.map(item => item.label).join(', ')}
        Valgus: {selected4.map(item => item.label).join(', ')}
        Kõrgus: {selected5.map(item => item.label).join(', ')}
        Külmataluvus: {selected6.map(item => item.label).join(', ')} */}

        {Data.map(item => {
          if (selected.map(item => item.label).includes(item.taimegrupp) ||
            selected1.map(item => item.label).includes(item.oitsemisaeg) ||
            selected2.map(item => item.label).includes(item.varvid) ||
            selected3.map(item => item.label).includes(item.kastmine) ||
            selected4.map(item => item.label).includes(item.valgus) ||
            selected5.map(item => item.label).includes(item.korgus) ||
            selected6.map(item => item.label).includes(item.kulmataluvus)
          ) {
            return (
              <div key={item.id}>
                <h3>{item.nimetus}</h3>
                <img src={item.pilt} alt="" />

                <p>Õitsemisaeg: {item.oitsemisaeg}</p>
                <p>Värvid: {item.varvid}</p>
                <p>Kastmine: {item.kastmine}</p>
                <p>Valgus: {item.valgus}</p>
                <p>Kõrgus: {item.korgus}</p>
                <p>Külmataluvus: {item.kulmataluvus}</p>
              </div>
            )
          }
        })}

      </div>

    </div>);
}

export default Characteristics;