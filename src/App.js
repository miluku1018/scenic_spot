import "./App.css";
import data from "./scenic_spot_C_f.json";
import { Table, Column } from "react-virtualized";

const myData = data.XML_Head.Infos.Info;

console.log(myData);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>觀光景點清單</h2>
      </header>
      <p>*空白為沒資料</p>
      <Table
        className="table"
        width={600}
        height={500}
        headerHeight={40}
        rowCount={myData.length}
        rowHeight={40}
        rowGetter={({ index }) => myData[index]}
      >
        <Column width={150} label="Region" dataKey="Region" />
        <Column width={150} label="Town" dataKey="Town" />
        <Column width={300} label="Name" dataKey="Name" />
      </Table>
    </div>
  );
}

export default App;
