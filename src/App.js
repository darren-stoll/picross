import React from 'react';
import './App.css';

const MainPage = () => {
  let picrossCellArray = [];
  // Row
  for (let i = 0; i < 16; i++) {
    // Column
    let columnArray = [];
    for (let j = 0; j < 16; j++) {
      let cellKey = "";
      if (i < 10) cellKey += "0";
      cellKey += i.toString();
      if (j < 10) cellKey += "0";
      cellKey += j.toString();
      columnArray.push(<Cell key={cellKey} cellKey={cellKey} row={i} col={j} />);
    }
    picrossCellArray.push(columnArray);
  }


  let keyCounter = 0;

  return (
    <div className="main">
      <div className="picrossBoard">
        {picrossCellArray.map(element => {
          let keyName = `picrossCol${keyCounter}`;
          keyCounter++;
          return (
            <div key={keyName} className="picrossCol">
              {element.map(e => {
                return e;
              })}
            </div>
          )
          
        })}
      </div>
    </div>
  )
}

const Cell = ({ cellKey, row, col }) => {
  const [active, setActive] = React.useState(true);

  let cellClass = active ? "picCell" : "picCellActive";
  
  return (
    <div id={cellKey} className={cellClass} onClick={() => {
      setActive(!active)
    }}></div>
  )
}

function App() {
  return (
    <>
      <MainPage />
    </>
  );
}

export default App;
