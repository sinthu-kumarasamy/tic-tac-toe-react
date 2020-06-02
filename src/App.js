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

  function onClickHandle(row,col){
    if(!matrix[row][col]){
      const nextPlayer = currentPlayer === 'x' ? 'o' : 'x';
      setCurrentPlayer(nextPlayer)
      const updatedMatrix = [...matrix]
      updatedMatrix[row][col] = nextPlayer
      setMatrix(updatedMatrix)
    }

  }
  return (
    <div className="App">
      <header className="App-header">
       {
         matrix.map((val,col)=>(
           <div className='col'>{
           val.map((value,row)=>(
             <div className='row' onClick= {()=>{onClickHandle(row,col)}}>
               {matrix[row][col]}
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
