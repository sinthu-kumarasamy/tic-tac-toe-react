import React,{useState,useEffect} from 'react';
import './App.css';

const initialState = [];

function App() {
  const [matrix,setMatrix] = useState(initialState);
  const [matrixSize,setMatrixSize] = useState(3);
  const [currentPlayer,setCurrentPlayer] = useState("o");
  useEffect(()=>{
    const row = new Array(matrixSize).fill(null);
    const tempMatrix = [];
    for(let i=0;i<matrixSize;i++){
      tempMatrix.push([...row])
    }
    setMatrix(tempMatrix)
  },[])
  return (
    <div className="App">
      <header className="App-header">
       {
         matrix.map((val,col)=>(
           <div className='col'>{
           val.map(()=>(
             <div className='row'>

             </div>
           ))
          }
          </div>
         ))
       }
      </header>
    </div>
  );
}

export default App;
